(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Search-FullSearch-FullSearch~pages-Search-Search~pages-index-Spikearea-Spikearea~pages-index-index"],{"1a33":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADO0lEQVRYR9VZW27jMAwUs9gAu1+9zKa3SS+VXMgn6k9SIAXWC0mUxZdoxY9FW6BIbCf2aEQOyQmEb/IHt7c/7zDCMYyHEMIhwAghpP/y/oDH9Xz8nLwO8fv4vfhKjyHk+4W/+R7TtUQSPivdE5+RzqVvxdcHDNeXCPQRRvg5D1QAnxalQddFFBAIFIFUoGXxEVQT6CcM1yPc3073cYRfaTUuoyuA4r0LYxroIWTWTUY/YLj+Xgw0PWxiQYYJP07hRBjbEGjehhyvNfbqMQLZEmhaTC+jMYFK4IuEUAlSFlGSobkoXLBaVAFGSFFAI/BgbP1GQE0FmGKQKAsjxWJ0S6AsCQs7Dali7Hcwmu6tGC1xV+PS1Ua61UyquIZy3aT6XOLR2XoXKMnQbqC9ISMZZc8ytn5foLy6+YxGiSvVanegJC4VYyJmresWUJSqrL+tGE1CLmoyaimr31OMtoDWklgFnuoz5sIqoNOKnEaj1YSIxJL6G0mgjQ87FmU0MwofMFxoCW3VcqkCcxLUKqeVwZ2AWiXUk6BeoHhfyvA6Rp8EKqRKtnx1q7cC2quNVqKR0vilgKou678DXVqlWP+pRxraoeWRg7d3uYkvXddc1peZCdszv5waMqa6JaKrjHECVPSkjjzRQY43xzZQR6pcoHxgtMYQzej5dB9DnJkiMAMoVioOVI4aPW0dZXQR0FcEamkjFek8bVqjdDMsprARUyidOGmMult/9oASYGYmz1cpPXuJ0fh7Ao0NUTIdjKzvZdSRHE8RVCVKDFoxWitVGLODwrN+Z6BSM6dKReo6+0w6n2AWZrF7ikCjU5JW4LV1tH/szHpV96nv5Nk5LlDPICPAjDm+yyBb5juRfnRitBOoGo/9tm6lnbMFUFtTtR25ynfygNK5xgKzg+/UdvIMoKr/lAaZAL3IIJN2DjEkbN+pB+gyBfC3/mnfaSOge/pOqKd1Ci1Z/8TowTr6pb7TnJOXzQfNaHaQFxhkvQtc5jtVoLfza/qxQbsZHTGKbkmX+dtr5zDnJDH6CcPlCLfz6R3Gw9EHGjuaAvyHYZnX3WDmQnGt4882ljdK+1WZ9XXrHzBcXkogfPmfxf4BbqAAhQzSHf8AAAAASUVORK5CYII="},2054:function(t,n,o){"use strict";o("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"10",h:"20",i:"30",s:"40",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,o,e){return 60*t*60*24+60*n*60+60*o+e},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,o=0,e=0,i=0;t>0?(n=Math.floor(t/86400),o=Math.floor(t/3600)-24*n,e=Math.floor(t/60)-24*n*60-60*o,i=Math.floor(t)-24*n*60*60-60*o*60-60*e):this.timeUp(),n<10&&(n="0"+n),o<10&&(o="0"+o),e<10&&(e="0"+e),i<10&&(i="0"+i),this.d=n,this.h=o,this.i=e,this.s=i},startData:function(){var t=this;clearInterval(this.timer),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=e},3470:function(t,n,o){var e=o("b576");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("385bb95d",e,!0,{sourceMap:!1,shadowMode:!1})},"4e97":function(t,n,o){"use strict";o("a9e3"),o("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,o,e,i){return t?t-parseInt((new Date).getTime()/1e3,10):60*n*60*24+60*o*60+60*e+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,o=0,e=0,i=0;t>0?(n=Math.floor(t/86400),o=Math.floor(t/3600)-24*n,e=Math.floor(t/60)-24*n*60-60*o,i=Math.floor(t)-24*n*60*60-60*o*60-60*e):this.timeUp(),n<10&&(n="0"+n),o<10&&(o="0"+o),e<10&&(e="0"+e),i<10&&(i="0"+i),this.d=n,this.h=o,this.i=e,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=e},7373:function(t,n,o){"use strict";var e=o("3470"),i=o.n(e);i.a},8672:function(t,n,o){"use strict";var e=o("db59"),i=o.n(e);i.a},"985f":function(t,n,o){"use strict";o.r(n);var e=o("c3fc"),i=o("da9a");for(var s in i)"default"!==s&&function(t){o.d(n,t,(function(){return i[t]}))}(s);o("7373");var r,a=o("f0c5"),c=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"5f9e875d",null,!1,e["a"],r);n["default"]=c.exports},b576:function(t,n,o){var e=o("24fb"),i=o("1de5"),s=o("1a33");n=e(!1);var r=i(s);n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-5f9e875d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-5f9e875d]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 4px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#666!important;line-height:24px;font-size:%?24?%}.uni-countdown__number[data-v-5f9e875d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:24px;height:24px;line-height:24px;background-image:url('+r+");background-repeat:no-repeat;background-size:100% 100%;color:#fff;-margin:%?5?%;text-align:center;font-size:14px}",""]),t.exports=n},c3fc:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return s})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-text",{staticClass:"uni-countdown__number"},[t._v(t._s(t.h))]),o("v-uni-text",{staticClass:"uni-countdown__splitor"},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-text",{staticClass:"uni-countdown__number"},[t._v(t._s(t.i))]),o("v-uni-text",{staticClass:"uni-countdown__splitor"},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-text",{staticClass:"uni-countdown__number"},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},s=[]},c697:function(t,n,o){"use strict";o.r(n);var e=o("d900"),i=o("e015");for(var s in i)"default"!==s&&function(t){o.d(n,t,(function(){return i[t]}))}(s);o("8672");var r,a=o("f0c5"),c=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,"7b530ab6",null,!1,e["a"],r);n["default"]=c.exports},d900:function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return s})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},s=[]},da9a:function(t,n,o){"use strict";o.r(n);var e=o("2054"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},db59:function(t,n,o){var e=o("de7c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("2d369b7b",e,!0,{sourceMap:!1,shadowMode:!1})},de7c:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-7b530ab6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-7b530ab6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-7b530ab6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}',""]),t.exports=n},e015:function(t,n,o){"use strict";o.r(n);var e=o("4e97"),i=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a}}]);