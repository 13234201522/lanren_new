(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Wode-kefu-kefu"],{"21b0":function(t,e,n){"use strict";n.r(e);var a=n("f37b"),i=n("6e60");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var u,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"1076be88",null,!1,a["a"],u);e["default"]=o.exports},"6e60":function(t,e,n){"use strict";n.r(e);var a=n("bb1b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},bb1b:function(t,e,n){"use strict";n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{url:""}},onLoad:function(){uni.showLoading({title:"正在为您连接客服···"}),this.KefuUrls()},watch:{},methods:{KefuUrls:function(){setTimeout((function(){uni.hideLoading()}),4e3);var t=uni.getStorageSync("nickname"),e=uni.getStorageSync("avatar"),n=uni.getStorageSync("userId");console.log(n,"useridididididid"),this.url='https://site.lazypeoplemart.store/chatlink.html?eid=8ec3fdb0fef34eb2454e9b1e47ccb161&metadata={"name":"'.concat(t,'","用户ID":"').concat(n,'","avatar":"').concat(e,'","qq":""}')}}};e.default=a},f37b:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100vh"}},[n("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.url,frameborder:"0"}})])},r=[]}}]);