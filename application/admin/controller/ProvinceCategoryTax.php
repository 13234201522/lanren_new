<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use fast\Tree;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 各省分类税费
 *
 * @icon fa fa-circle-o
 */
class ProvinceCategoryTax extends Backend
{
    
    /**
     * ProvinceCategoryTax模型对象
     * @var \app\admin\model\ProvinceCategoryTax
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('app\admin\model\ProvinceCategoryTax');
        $this->model_category = model('app\admin\model\Category');
    }

//    public function _initialize()
//    {
//        parent::_initialize();
//        $this->model = new \app\admin\model\Subject;
//        $this->view->assign("statusList", $this->model->getStatusList());
//    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


    /**
     * 查看
     */
    public function index()
    {
        //当前是否为关联查询
        $this->relationSearch = true;
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->isAjax())
        {
            $search = $this->request->request("search");
            $province_tax_id = $this->request->request("province_tax_id");
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField'))
            {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();

            $list = $this->model
                    ->with(['provincetax','category'])
                    ->where($where)
                    ->where('province_tax_id',$province_tax_id)
                    ->select();
            foreach ($list as $key => $value) {
                // ->bind('id,name,weigh,image')
                $value['province_category_id'] = $value['id'];
                $value['id'] =  $value['category']['id'];
                $value['pid'] =  $value['category']['pid'];
                $value['name'] =  $value['category']['name'];
                $value['image'] =  $value['category']['image'];
                unset($value['category']);
                $list[$key] = $value;
            }
            // halt(collection($list)->toArray());
            // halt($list);

            //构造父类select列表选项数据
            $tree = Tree::instance();
            $tree->init(collection($list)->toArray(), 'pid');
            $this->categorylist = $tree->getTreeList($tree->getTreeArray(0), 'name');
            $categorydata = [0 => ['name' => __('None')]];
            foreach ($this->categorylist as $k => $v) {
                $categorydata[$v['id']] = $v;
            }

            $list_all = $this->categorylist;
            // foreach ($this->categorylist as $k => $v) {
            //     if ($search) {
            //         if ($v['type'] == $type && stripos($v['name'], $search) !== false || stripos($v['nickname'], $search) !== false) {
            //             if ($type == "all" || $type == null) {
            //                 $list_all = $this->categorylist;
            //             } else {
            //                 $list_all[] = $v;
            //             }
            //         }
            //     } else {
            //         if ($type == "all" || $type == null) {
            //             $list_all = $this->categorylist;
            //         } elseif ($v['type'] == $type) {
            //             $list_all[] = $v;
            //         }
            //     }
            // }

            $total = count($list_all);
            $result = array("total" => $total, "rows" => $list_all);

            return json($result);
        }


        return $this->view->fetch();
    }
    
    
    /**
     * 编辑
     */
    public function edit($ids = null)
    {
        $params = $this->request->request('row/a'); 
        $ids = $params['province_category_id'];
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            if (!in_array($row[$this->dataLimitField], $adminIds)) {
                $this->error(__('You have no permission'));
            }
        }
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            $category_id = $params['category_id'];
            if ($params) {
                //获取分类详情
                if (!$this->model_category->where(['id'=>$category_id])->value('pid')) {
                    $this->error('一级分类不可设置税费');
                }
                
                $params = $this->preExcludeFields($params);
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.edit' : $name) : $this->modelValidate;
                        $row->validateFailException(true)->validate($validate);
                    }
                    $data['tax_rate'] = $params['tax_rate'];
                    $result = $row->allowField(true)->save($data);
                    Db::commit();
                } catch (ValidateException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were updated'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    
    /**
     * 设置税费
     */
    public function set_tax($ids = null)
    {
        $params = $this->request->request(); 
        $ids = $params['province_category_id'];
        $row = $this->model->get($ids);
        if (!$row) {
            $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            if (!in_array($row[$this->dataLimitField], $adminIds)) {
                $this->error(__('You have no permission'));
            }
        }
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.edit' : $name) : $this->modelValidate;
                        $row->validateFailException(true)->validate($validate);
                    }
                    $data['tax_rate'] = $params['tax_rate'];
                    $result = $row->allowField(true)->save($data);
                    Db::commit();
                } catch (ValidateException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (PDOException $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                } catch (Exception $e) {
                    Db::rollback();
                    $this->error($e->getMessage());
                }
                if ($result !== false) {
                    $this->success();
                } else {
                    $this->error(__('No rows were updated'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $this->view->assign("row", $row);
        return $this->view->fetch();
    }
    

    /**
     * 查看
     */
    // public function index()
    // {
    //     //当前是否为关联查询
    //     $this->relationSearch = true;
    //     //设置过滤方法
    //     $this->request->filter(['strip_tags', 'trim']);
    //     if ($this->request->isAjax())
    //     {
    //         //如果发送的来源是Selectpage，则转发到Selectpage
    //         if ($this->request->request('keyField'))
    //         {
    //             return $this->selectpage();
    //         }
    //         list($where, $sort, $order, $offset, $limit) = $this->buildparams();
    //         $total = $this->model
    //                 ->with(['provincetax'])
    //                 ->where($where)
    //                 ->order($sort, $order)
    //                 ->count();

    //         $list = $this->model
    //                 ->with(['provincetax'])
    //                 ->where($where)
    //                 ->order($sort, $order)
    //                 ->limit($offset, $limit)
    //                 ->select();

    //         foreach ($list as $row) {
                
    //             $row->getRelation('provincetax')->visible(['name']);
    //         }
    //         $list = collection($list)->toArray();
    //         $result = array("total" => $total, "rows" => $list);

    //         return json($result);
    //     }
    //     return $this->view->fetch();
    // }
}
