(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Order-Orderpages-Orderdetails"],{"1a1a":function(t,i,e){var a=e("7d01");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("b829f316",a,!0,{sourceMap:!1,shadowMode:!1})},"30c2":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"details"},[t.maskShow?a("v-uni-view",{staticClass:"mask",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeMask.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"details_main"},[a("v-uni-view",{staticClass:"user_box"},[a("v-uni-view",{staticClass:"user_msg"},[a("v-uni-text",[t._v(t._s(t.address.link_name))]),a("v-uni-text",[t._v(t._s(t.address.link_mobile))])],1),a("v-uni-view",{staticClass:"user_dizhi"},[t._v(t._s(t.address.province)+"\n\t\t\t\t"+t._s(t.address.area)+"\n\t\t\t\t"+t._s(t.address.city)+"\n\t\t\t\t"+t._s(t.address.detail))])],1),t._l(t.orderInfo.order_detail,(function(i,e){return a("v-uni-view",{},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"Shop_msg_box"},[a("v-uni-image",{staticClass:"msg_box_img",attrs:{src:i.image}}),a("v-uni-view",{staticClass:"shop_right"},[a("v-uni-view",{staticClass:"shop_righ_name"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"shop_righ_guige"},[a("v-uni-text",[t._v(t._s(i.specs))]),a("v-uni-text",[t._v("X"+t._s(i.num))])],1),a("v-uni-view",{staticClass:"shop_righ_price"},[t._v("$"),a("v-uni-text",[t._v(t._s(i.price))])],1)],1)],1)],1)],1)})),a("v-uni-view",{staticClass:"priceMsg"},[a("v-uni-view",{staticClass:"priceMsg_title"},[t._v("商品信息")]),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("商品总价")]),a("v-uni-text",[t._v("$"+t._s(t.orderInfo.total_goods_price))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("运费")]),a("v-uni-text",[t._v("$"+t._s(t.orderInfo.postage_price))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("优惠券")]),a("v-uni-text",[t._v("$"+t._s(t.orderInfo.coupon_price))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("满减")]),a("v-uni-text",[t._v("$"+t._s(t.orderInfo.fullcut_price))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("小费")]),a("v-uni-text",[t._v("$"+t._s(t.orderInfo.reward_price))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("税费&手续费")]),a("v-uni-text",[t._v("$"+t._s(Number(t.orderInfo.tax_price)+Number(t.orderInfo.charge_price)))])],1),a("v-uni-view",{staticClass:"priceMsg_for"},[a("v-uni-text",[t._v("实付")]),a("v-uni-text",{staticStyle:{color:"#FF5454"}},[t._v("$"+t._s(t.orderInfo.pay_price))])],1)],1)],2),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orderInfo.status,expression:"orderInfo.status == 0"}],staticClass:"pay_btn",attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.pay.apply(void 0,arguments)}}},[t._v("立即支付")]),a("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:2==t.orderInfo.status,expression:"orderInfo.status == 2"}],staticClass:"pay_btn",attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}},[t._v("确认收货")]),t.wayShow?a("v-uni-view",{staticClass:"chooseType"},[a("v-uni-view",{staticClass:"waytext"},[t._v("请选择支付方式")]),a("v-uni-view",{staticClass:"way1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickWx.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"waytext"},[a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("45d8"),mode:""}}),a("v-uni-view",{staticStyle:{"margin-left":"15rpx"}},[t._v("微信")])],1),a("v-uni-view",{},[t.wxChoosed?t._e():a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("6c98"),mode:""}}),t.wxChoosed?a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("9bf1"),mode:""}}):t._e()],1)],1),a("v-uni-view",{staticClass:"way1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickAli.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"waytext"},[a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("7e7a"),mode:""}}),a("v-uni-view",{staticStyle:{"margin-left":"15rpx"}},[t._v("支付宝支付")])],1),a("v-uni-view",{},[t.ali?t._e():a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("6c98"),mode:""}}),t.ali?a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("9bf1"),mode:""}}):t._e()],1)],1),a("v-uni-view",{staticClass:"way1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickKa.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"waytext"},[a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("6419"),mode:""}}),a("v-uni-view",{staticStyle:{"margin-left":"15rpx"}},[t._v("信用卡/借记卡")])],1),a("v-uni-view",{},[t.kaChoosed?t._e():a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("6c98"),mode:""}}),t.kaChoosed?a("v-uni-image",{staticClass:"wayimg",attrs:{src:e("9bf1"),mode:""}}):t._e()],1)],1)],1):t._e()],1)},o=[]},"45d8":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACaUlEQVRIS+WWXWhSYRzGn3N07hwdY0HB0DGP7qPcTdBlKxe1C2sVEV10uzCjoiiy7MMmZRix5WoxaYNBN8EYRESfUNEoNhq5LLqYUW6aDifZPnTkps4THnCw9By9cDf13h3Oc57f/33eP//3EKLX0p0sy/aCZatQzEUQAYIgDAT5ivYX3TxTaBpCvqTYYhb+t9d/AJCXyqFXtKKpQosqSoEkm4R/IYA3M4PonxqAb+GHYMK8EZUQJThVfQJm1QWUictymiRTSXT5u9HmuYJYKpZTkxNAkzRebHqMLRWNBZ3/0OwwWlz7EF2KZulzAu5qunFYcagg8/dzI2j32jEy9wHBeDA/oJaugXvzFxAEwQtgWRZPws/Q7rPDGRmFUXka55mzaHI242PUteK7rB2YGCNstVZONJ2YhnXchht1NkhICeKpOO5P9aPDa4f791fsWqvD7Xo71FIVp7d4ruLaxHVhQI/GwXVNZjWP6hBO/ML2NdswEHrAxcBQStxafxN71rWsMOubvAfD2FFhQGd9B05WH18WPQ0/x95P+7lniqRwjjkDk9IISkRlRdjp64Lxm0kYoJe3oqfBsSxK56117oCKZmCtsUBJK3nP5sDng3j485EwoFxcjsDWcchEsoK6KCOaiHnRMLwRcTYuDEi/PaLQw6G5UzAgkUpA59qNwZm3+ds0o2hTX4JFbc4LCS2GYBg7xrVtriU4TT2NbjA8maer7p3sg9ljQSQZ4S2EF5AeF0GtDxe/X+Z6v15aB41sAyiylBt272aHML80n3eHvAAxIUalpBKBxUBeEyHBv3DhrPalv9q/LX8Ac+H547KaFkIAAAAASUVORK5CYII="},"5a89":function(t,i,e){"use strict";e.r(i);var a=e("e095"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=s.a},6419:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAg0lEQVRIS2NkoDFgpLH5DLS34Ou5EM9/f//N+s/wX4aavmFkYHzCxMyUxvj5dNBjahsOcyjIEsZPpwP/U9Pl6GbR3oLne+xo64Pba3Voa8HDLaa0tWDoR/KoDwhlUtpntNE4IBgHNC2uGRn/MdKswmFk/MfAyDCb9lUmoTCkVJ7mPgAAJ8RJD7vhAgQAAAAASUVORK5CYII="},"6c98":function(t,i){t.exports="data:image/png;base64,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"},"7d01":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-4c075798]{width:100%;height:100%;background:#333;opacity:.7;z-index:8;position:fixed;left:0;bottom:0}.way1[data-v-4c075798]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wayimg[data-v-4c075798]{width:%?30?%;height:%?30?%}.chooseType[data-v-4c075798]{width:100%;height:%?280?%;position:fixed;bottom:0;left:0;background:#fff;z-index:10;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.waytext[data-v-4c075798]{font-size:%?26?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.details[data-v-4c075798]{overflow-y:scroll;height:100%;background-color:#f5f5f5;padding:%?32?% %?30?%}.details .details_main > uni-view[data-v-4c075798]{background-color:#fff;-webkit-border-radius:%?16?%;border-radius:%?16?%;margin-bottom:%?20?%;padding:%?40?%}.details .details_main .user_box[data-v-4c075798]{color:#323232}.details .details_main .user_box .user_msg[data-v-4c075798]{margin-bottom:%?28?%}.details .details_main .user_box .user_msg uni-text[data-v-4c075798]:nth-child(1){margin-right:%?20?%}.details .details_main .Shop_msg_box[data-v-4c075798]{display:-webkit-box;display:-webkit-flex;display:flex}.details .details_main .Shop_msg_box .msg_box_img[data-v-4c075798]{width:%?200?%;height:%?200?%}.details .details_main .Shop_msg_box .shop_right[data-v-4c075798]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333;margin-left:%?20?%}.details .details_main .Shop_msg_box .shop_right .shop_righ_name[data-v-4c075798]{font-size:%?32?%;margin-bottom:%?32?%;overflow:hidden;white-space:normal;text-overflow:ellipsis;width:100%}.details .details_main .Shop_msg_box .shop_right .shop_righ_guige[data-v-4c075798]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;margin-bottom:%?44?%}.details .details_main .Shop_msg_box .shop_right .shop_righ_price[data-v-4c075798]{color:#ff5454;font-size:%?24?%}.details .details_main .Shop_msg_box .shop_right .shop_righ_price uni-text[data-v-4c075798]{font-size:%?40?%;font-weight:700}.details .details_main .priceMsg[data-v-4c075798]{color:#3c3c3c}.details .details_main .priceMsg .priceMsg_title[data-v-4c075798]{font-size:%?36?%;margin-bottom:%?28?%}.details .details_main .priceMsg .priceMsg_for[data-v-4c075798]{font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?20?%}.details .pay_btn[data-v-4c075798]{height:40px;line-height:40px;background-image:-webkit-gradient(linear,left top,left bottom,from(#ffc24d),to(#fee04c));background-image:-webkit-linear-gradient(#ffc24d,#fee04c);background-image:linear-gradient(#ffc24d,#fee04c);-webkit-border-radius:%?120?%;border-radius:%?120?%;color:#141414;font-weight:700}',""]),t.exports=i},"7e7a":function(t,i,e){t.exports=e.p+"static/img/payment_icon_zhifubao@2x.7dce1598.png"},"9bf1":function(t,i){t.exports="data:image/png;base64,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"},"9ddc":function(t,i,e){"use strict";e.r(i);var a=e("30c2"),s=e("5a89");for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);e("fd06");var n,r=e("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"4c075798",null,!1,a["a"],n);i["default"]=c.exports},e095:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{orderMsgList:[{name:"订单编号",price:"1231531353"},{name:"支付方式",price:"线上支付"},{name:"下单时间",price:"2020-07-15  16:45:44"}],titleList:[" ","待付款详情","待发货详情","待收货详情","已完成详情"],testnum:0,address:"",orderInfo:"",id:"",maskShow:!1,wayShow:!1,kaChoosed:!1,wxChoosed:!1,ali:!1,online:!1}},onLoad:function(t){console.log(t,"详情加载传入参数"),this.id=t.id,this.getOrderInfo(this.id),this.testnum=t.index},methods:{getOrderInfo:function(t){var i=this;this.$Request({url:"/api/order/info",data:{token:uni.getStorageSync("token"),order_id:t}}).then((function(t){var e=t.data.data.info;console.log("订单详情信息",e),i.orderInfo=e,i.address=e.address,console.log(i.address)}))},closeMask:function(){this.maskShow=!1,this.wayShow=!1},clickKa:function(){var t=this;this.ali=!1,this.wxChoosed=!1,this.kaChoosed=!this.kaChoosed,setTimeout((function(){t.closeMask(),t.goPay()}),1e3)},clickAli:function(){var t=this;this.wxChoosed=!1,this.kaChoosed=!1,this.ali=!this.ali,setTimeout((function(){t.closeMask(),t.goPay()}),1e3)},clickWx:function(){var t=this;this.ali=!1,this.kaChoosed=!1,this.wxChoosed=!this.wxChoosed,setTimeout((function(){t.closeMask(),t.goPay()}),1e3)},pay:function(){this.wayShow=!0,this.maskShow=!0},goPay:function(){var t="";this.wxChoosed?t="wechat":this.kaChoosed&&(t="card"),console.log(t,"付款方式"),this.$Request({url:"/api/order/payOrder",data:{token:uni.getStorageSync("token"),order_num:this.orderInfo.order_num,pay_state:t}}).then((function(t){200==t.data.code&&(uni.setStorageSync("payurl",t.data.data.url),uni.navigateTo({url:"/pages/Wode/memberPages/memberPay/memberPay"}))}))},confirm:function(){var t=this;uni.showModal({title:"提示",content:"是否确认收货",success:function(i){i.confirm?t.$Request({url:"/api/order/receive",data:{token:uni.getStorageSync("token"),order_id:t.orderInfo.id}}).then((function(i){200==i.data.code&&(uni.showToast({title:"已确认收货"}),t.refresh())})):uni.showToast({title:"操作取消",icon:"none"})},fail:function(){}})}}};i.default=a},fd06:function(t,i,e){"use strict";var a=e("1a1a"),s=e.n(a);s.a}}]);