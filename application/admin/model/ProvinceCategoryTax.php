<?php

namespace app\admin\model;

use think\Model;


class ProvinceCategoryTax extends Model
{

    

    

    // 表名
    protected $name = 'province_category_tax';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    







    public function provincetax()
    {
        return $this->belongsTo('ProvinceTax', 'province_tax_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
    
    public function category()
    {
        return $this->belongsTo('Category', 'category_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
