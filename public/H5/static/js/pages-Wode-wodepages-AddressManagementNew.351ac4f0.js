(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Wode-wodepages-AddressManagementNew"],{2042:function(e,t,n){"use strict";var i=n("c1f6"),a=n.n(i);a.a},2444:function(e,t,n){"use strict";n.r(t);var i=n("70c2"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"3f0a":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("d39b")),s={components:{Evanswitch:a.default},onShow:function(e){if(1==this.jump){if(uni.getStorageSync("addressName3"))return void(this.cityandpro=uni.getStorageSync("addressName3"));if(uni.getStorageSync("addressName2"))return void(this.cityandpro=uni.getStorageSync("addressName2"));if(uni.getStorageSync("addressName1"))return void(this.cityandpro=uni.getStorageSync("addressName1"))}},onLoad:function(e){this.jump=e.jump,console.log("111",JSON.parse(e.item)),2==this.jump&&(this.modifyObj=JSON.parse(e.item),this.modifyMsg(e.item),this.newAddress.name=this.modifyObj.link_name,this.newAddress.tell=this.modifyObj.link_mobile,this.cityandpro=this.modifyObj.province+","+this.modifyObj.city,this.userNeedMsg.useraddre=this.modifyObj.detail,uni.setNavigationBarTitle({title:"修改地址"}))},mounted:function(){},data:function(){return{userNeedMsg:{leve1id:"",leve2id:"",leve1name:"",leve2name:"",useraddre:""},imgsrc:"../../../static/wodeyouhui/moren.png",changeNum:1,newAddress:{name:"",tell:"",isdefault:1},checked:!1,cityandpro:"",modifyObj:"",modifyFlag:!1,editId:"",locObj:"",jump:0,pid:"",cid:"",pname:"",cname:""}},methods:{getLoc:function(){},modifyMsg:function(e){var t=JSON.parse(e);console.log(t),this.newAddress.name=t.link_name,this.newAddress.tell=t.link_mobile,this.userNeedMsg.leve1id=t.province_place_id,this.userNeedMsg.leve2id=t.city_place_id,this.userNeedMsg.leve1name=t.province,this.userNeedMsg.leve2name=t.city,this.userNeedMsg.useraddre=t.detail,this.editId=t.id,this.cityandpro=this.userNeedMsg.leve1name+" "+this.userNeedMsg.leve2name+"市",1==t.status?this.checked=!0:this.checked=!1,console.log(this.checked)},goToMap:function(){uni.navigateTo({url:"../../baiduMap/index/index?type=choose"})},removeAdd:function(){uni.removeStorageSync("addressName1"),uni.removeStorageSync("addressName2"),uni.removeStorageSync("addressName3")},BtnSaveMsg:function(){var e=this,t=uni.getStorageSync("pname"),n=uni.getStorageSync("cname"),i=uni.getStorageSync("pid"),a=uni.getStorageSync("cid"),s={token:uni.getStorageSync("token"),link_name:this.newAddress.name,link_mobile:this.newAddress.tell,province:t,province_place_id:i,city:n,city_place_id:a,detail:this.userNeedMsg.useraddre,status:this.checked?"1":"0",area:""},r={token:uni.getStorageSync("token"),link_name:this.newAddress.name,link_mobile:this.newAddress.tell,province:this.userNeedMsg.leve1name,province_place_id:this.userNeedMsg.leve1id,city:this.userNeedMsg.leve2name,city_place_id:this.userNeedMsg.leve2id,detail:this.userNeedMsg.useraddre,status:this.checked?"1":"0",area:"",address_id:this.editId};console.log(r),2==this.jump?this.$Request({url:"/api/address/edit",data:r}).then((function(t){console.log(t),200==t.data.code&&(uni.showToast({title:"修改成功",icon:"success"}),e.removeAdd(),setTimeout((function(){2==e.jump&&uni.navigateBack({delta:1})}),2e3))})):this.$Request({url:"/api/address/add",data:s}).then((function(t){200==t.data.code&&(e.removeAdd(),1==uni.getStorageSync("addNew")?uni.navigateBack({delta:2}):(uni.showToast({title:"添加成功",icon:"success"}),setTimeout((function(){1==e.jump&&uni.navigateBack({delta:1})}),2e3)))}))},setStauts:function(){0==this.changeNum?this.changeNum=1:this.changeNum=0}}};t.default=s},"6d52":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"evan-switch",class:{"evan-switch--disabled":e.disabled},style:{width:2*e.size+"px",height:e.switchHeight,borderRadius:e.size+"px",backgroundColor:e.currentValue===e.activeValue?e.activeColor:e.inactiveColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"evan-switch__circle",style:{width:e.size+"px",height:e.size+"px",transform:e.currentValue===e.activeValue?"translateX("+e.size+"px)":"translateX(0)"}})],1)},s=[]},"70c2":function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"EvanSwitch",props:{value:{type:[String,Number,Boolean],default:!1},activeColor:{type:String,default:"#108ee9"},inactiveColor:{type:String,default:"#fff"},size:{type:Number,default:30},disabled:{type:Boolean,default:!1},activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},beforeChange:{type:Function,default:null},extraData:null,contextLevel:{type:Number,default:1}},computed:{switchHeight:function(){return this.size+"px"}},watch:{value:{immediate:!1,handler:function(e){this.currentValue=e,console.log("开关状态")}}},data:function(){return{currentValue:!1}},methods:{toggle:function(){var e=this;if(!this.disabled)if(this.beforeChange&&"function"===typeof this.beforeChange){for(var t=this,n=0;n<this.contextLevel;n++)t=t.$options.parent;var i=this.beforeChange(this.currentValue===this.activeValue?this.inactiveValue:this.activeValue,this.extraData,t);"object"===typeof i?i.then((function(){e.toggleValue()})).catch((function(){})):"boolean"===typeof i&&i&&this.toggleValue()}else this.toggleValue()},toggleValue:function(){this.currentValue=this.currentValue===this.activeValue?this.inactiveValue:this.activeValue,this.$emit("input",this.currentValue),this.$emit("change",this.currentValue)}}};t.default=i},"85ae":function(e,t,n){"use strict";n.r(t);var i=n("3f0a"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"9ad5":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.change_phone[data-v-1a70c496]{height:100vh;background-color:#f5f5f5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.change_phone .newPhone[data-v-1a70c496],\r\n.change_phone .code[data-v-1a70c496]{background-color:#fff;height:60px;display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?32?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?8?%}.change_phone .newPhone uni-text[data-v-1a70c496],\r\n.change_phone .code uni-text[data-v-1a70c496]{display:block;color:#333;width:%?208?%;font-size:%?36?%}.change_phone .newPhone .put[data-v-1a70c496],\r\n.change_phone .code .put[data-v-1a70c496]{color:#676767;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%}.change_phone .setStauts[data-v-1a70c496]{height:100px;background-color:#fff;padding:0 %?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.change_phone .save_btn[data-v-1a70c496]{width:100%;position:absolute;bottom:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?32?%}.change_phone .save_btn > uni-button[data-v-1a70c496]{line-height:40px;height:40px;-webkit-border-radius:80px;border-radius:80px;background-image:-webkit-gradient(linear,left top,left bottom,from(#ffc24d),to(#fee04c));background-image:-webkit-linear-gradient(#ffc24d,#fee04c);background-image:linear-gradient(#ffc24d,#fee04c);font-weight:700}',""]),e.exports=t},b9c2:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.evan-switch[data-v-536013f2]{position:relative;border-width:1px;border-color:rgba(0,0,0,.1);border-style:solid;-webkit-transition:background-color .3s;transition:background-color .3s;-webkit-box-sizing:content-box;box-sizing:content-box}.evan-switch--disabled[data-v-536013f2]{opacity:.3}.evan-switch__circle[data-v-536013f2]{position:absolute;left:0;top:0;background-color:#fff;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}',""]),e.exports=t},c1f6:function(e,t,n){var i=n("b9c2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("60c2f6ed",i,!0,{sourceMap:!1,shadowMode:!1})},d39b:function(e,t,n){"use strict";n.r(t);var i=n("6d52"),a=n("2444");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("2042");var r,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"536013f2",null,!1,i["a"],r);t["default"]=d.exports},d63d:function(e,t,n){"use strict";var i=n("f75d"),a=n.n(i);a.a},f384:function(e,t,n){"use strict";n.r(t);var i=n("fe9d"),a=n("85ae");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("d63d");var r,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1a70c496",null,!1,i["a"],r);t["default"]=d.exports},f75d:function(e,t,n){var i=n("9ad5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5110d01a",i,!0,{sourceMap:!1,shadowMode:!1})},fe9d:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={evanSwitch:n("d39b").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"change_phone"},[n("v-uni-view",{staticClass:"newPhone"},[n("v-uni-text",[e._v("收货人")]),n("v-uni-input",{staticClass:"put",attrs:{type:"text",placeholder:"姓名"},model:{value:e.newAddress.name,callback:function(t){e.$set(e.newAddress,"name",t)},expression:"newAddress.name"}})],1),n("v-uni-view",{staticClass:"newPhone"},[n("v-uni-text",[e._v("联系方式")]),n("v-uni-input",{staticClass:"put",attrs:{type:"text",maxlength:"11",placeholder:"手机号码"},model:{value:e.newAddress.tell,callback:function(t){e.$set(e.newAddress,"tell",t)},expression:"newAddress.tell"}})],1),n("v-uni-view",{staticClass:"newPhone",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goToMap.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("所在地区")]),n("v-uni-input",{staticClass:"put",attrs:{type:"text",placeholder:"请选择省,市"},model:{value:e.cityandpro,callback:function(t){e.cityandpro=t},expression:"cityandpro"}})],1),n("v-uni-view",{staticClass:"newPhone"},[n("v-uni-text",[e._v("详细地址")]),n("v-uni-input",{staticClass:"put",attrs:{type:"text",placeholder:"详细地址需要填写楼层号"},model:{value:e.userNeedMsg.useraddre,callback:function(t){e.$set(e.userNeedMsg,"useraddre",t)},expression:"userNeedMsg.useraddre"}})],1),n("v-uni-view",{staticClass:"setStauts"},[n("v-uni-text",[e._v("设置为默认地址")]),n("evan-switch",{attrs:{"active-color":"#FEE04C",size:20},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),n("v-uni-view",{staticClass:"save_btn"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.BtnSaveMsg.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)},s=[]}}]);