<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use fast\Tree;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 各省税费
 *
 * @icon fa fa-circle-o
 */
class ProvinceTax extends Backend
{
    
    /**
     * ProvinceTax模型对象
     * @var \app\admin\model\ProvinceTax
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\ProvinceTax;
        $this->model_province_category = new \app\admin\model\ProvinceCategoryTax;
        $this->model_category = model('app\admin\model\Category');
        
        
        
        // $this->categorys = $this->model_category->field('id,pid,name,weigh')->order('weigh desc,id desc')->select();

        // $this->categoryList = collection($this->categorys)->toArray();
        // Tree::instance()->init($this->categoryList, 'pid');
        // $this->categoryList = Tree::instance()->getTreeList(Tree::instance()->getTreeArray(0), 'name');
        // $categorydata = [0 => ['name' => __('全部')]];
        // foreach ($this->categoryList as $k => &$v) {
        //     $categorydata[$v['id']] = $v;
        // }
        // unset($v);
        // $this->view->assign('categorydata', $categorydata);

    }
    
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
            //如果发送的来源是Selectpage，则转发到Selectpage
            if ($this->request->request('keyField'))
            {
                return $this->selectpage();
            }
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                    ->with(['category'])
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->with(['category'])
                    ->where($where)
                    ->order($sort, $order)
                    ->limit($offset, $limit)
                    ->select();

            foreach ($list as $row) {
                if ($row['category_id'] === 0) {
                    $row['category']['name'] = '全部';
                }
                $row->getRelation('category')->visible(['name']);
            }
            $list = collection($list)->toArray();
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        return $this->view->fetch();
    }


    /**
     * 添加
     */
    public function add()
    {
        if ($this->request->isPost()) {
            $params = $this->request->post("row/a");
            if ($params) {
                $params = $this->preExcludeFields($params);

                if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
                    $params[$this->dataLimitField] = $this->auth->id;
                }
                //判断当前地址id是否存在
                $place_id = $params['place_id'];
                if ($this->model->where(['place_id'=>$place_id])->find()) {
                    $this->error('当前省已经存在,请勿重复添加');
                }
                $result = false;
                Db::startTrans();
                try {
                    //是否采用模型验证
                    if ($this->modelValidate) {
                        $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                        $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                        $this->model->validateFailException(true)->validate($validate);
                    }
                    $result = $this->model->allowField(true)->save($params);
                    $category_ids = $this->model_category->column('id');
                    $data_province_category = [];
                    foreach ($category_ids as $value) {
                        $data_province_category[] = [
                            'province_tax_id' => $this->model->id,
                            'category_id' => $value,
                            ];
                    }
                    $this->model_province_category->saveAll($data_province_category);
                    
                    //获取全部分类
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
                    $this->error(__('No rows were inserted'));
                }
            }
            $this->error(__('Parameter %s can not be empty', ''));
        }
        return $this->view->fetch();
    }
    
    
     /**
     * 删除
     */
    public function del($ids = "")
    {
        if ($ids) {
            $pk = $this->model->getPk();
            $adminIds = $this->getDataLimitAdminIds();
            if (is_array($adminIds)) {
                $this->model->where($this->dataLimitField, 'in', $adminIds);
            }
            $list = $this->model->where($pk, 'in', $ids)->select();
            
            $province_tax_ids = $this->model->where($pk, 'in', $ids)->column('id');

            $count = 0;
            Db::startTrans();
            try {
                foreach ($list as $k => $v) {
                    $count += $v->delete();
                }
                
                //删除当前省下的分类
                $this->model_province_category->where(['province_tax_id'=>['in',$province_tax_ids]])->delete();
                
                Db::commit();
            } catch (PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            } catch (Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($count) {
                $this->success();
            } else {
                $this->error(__('No rows were deleted'));
            }
        }
        $this->error(__('Parameter %s can not be empty', 'ids'));
    }

}
