define(['jquery', 'bootstrap', 'backend', 'table', 'form', 'editable'], function ($, undefined, Backend, Table, Form, undefined) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'province_category_tax/index' + location.search,
                    add_url: 'province_category_tax/add',
                    // edit_url: 'province_category_tax/edit',
                    // del_url: 'province_category_tax/del',
                    multi_url: 'province_category_tax/multi',
                    table: 'province_category_tax',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                escape: false,
                pagination: false,
                showToggle: false,
                showColumns: false,
                visible: false,
                commonSearch: false,
                showExport: false,
                searchFormVisible: false,
                operate: false,
                search: false,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        // {field: 'province_tax_id', title: __('Province_tax_id')},
                        {field: 'provincetax.name', title: __('Provincetax.name')},
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'name', title: __('Name'), align: 'left'},
                        {field: 'image', title: __('图片'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {
                            field: 'tax_rate', 
                            title: __('Tax_rate'), 
                            // editable: function (row) {  
                            //     console.log(row);
                            // }
                        },
                        // {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {
                            field: 'operate', 
                            title: __('Operate'), 
                            table: table, 
                            events: Table.api.events.operate, 
                            buttons: [
                                {
                                    name: 'set_tax',
                                    title: __('设置税费'),
                                    text: __('设置税费'),
                                    classname: 'btn btn-xs btn-province_category_tax btn-primary btn-dialog',
                                    // icon: 'fa fa-list',
                                    url: 'province_category_tax/set_tax?province_category_id={province_category_id}',
                                    visible: function (row) {
                                        //返回true时按钮显示,返回false隐藏
                                        if ( row.pid != 0) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    callback: function (data) {
                                    }
                                },
                            ],
                            formatter: Table.api.formatter.operate}
                            
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        set_tax: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});