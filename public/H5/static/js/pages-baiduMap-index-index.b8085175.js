(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-baiduMap-index-index"],{"55ef":function(e,t,n){"use strict";var o=n("4ea4");n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("a9e3"),n("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("5530")),s=o(n("ade3")),i={data:function(){return{lat:"",lng:"",centers:{lat:0,lng:0},markers:[{position:{lat:39.90419989999999,lng:116.4073963}}],place:null,zoom:16,type:"",address:"",addressObj:""}},onLoad:function(e){this.type=e.type,uni.removeStorageSync("firstLogin")},description:"Autocomplete Example (#164)",mounted:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError):alert("当前环境不支持地理位置服务")},methods:{search:function(){var e=this,t=new XMLHttpRequest;t.open("get","https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.address,"&key=AIzaSyBhYuu1H_BcD6hIJiIPZ5Y05K0oY63WHtw")),t.send(),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&(e.addressObj=JSON.parse(t.responseText),e.centers.lat=e.addressObj.results[0].geometry.location.lat,e.centers.lng=e.addressObj.results[0].geometry.location.lng,e.handler(),console.log(e.addressObj,"搜索地址"))}},getLoc:function(){},codeAddress:function(){var e=document.getElementById("address").value;geocoder.geocode({address:e},(function(t,n){if(n==google.maps.GeocoderStatus.OK){map.setCenter(t[0].geometry.location);var o=new google.maps.Marker({map:map,position:t[0].geometry.location,title:e,animation:google.maps.Animation.DROP}),a="地址: "+t[0].formatted_address,s=new google.maps.InfoWindow({content:"<span style=‘font-size:11px‘><b>名称: </b>"+e+"<br>"+a+"</span>",pixelOffset:0,position:t[0].geometry.location});s.open(map,o),google.maps.event.addListener(o,"click",(function(){s.open(map,o)}))}else alert("Geocode was not successful for the following reason: "+n)}))},geocodeLatLng:function(e,t,n){var o=this,a=parseFloat(this.centers.lat),s=parseFloat(this.centers.lng);new google.maps.LatLng(a,s);(new google.maps.Geocoder).geocode({location:this.centers},(function(e,t){"OK"===t?(console.log(e,"地址数组"),e.map((function(e,t){console.log(e,"地址信息子项"),e.types.map((function(t,n){"administrative_area_level_1"==t||"political"==t?(uni.setStorageSync("pname",e.address_components[0].long_name),uni.setStorageSync("pid",e.place_id)):"administrative_area_level_2"==t||"political"==t?(uni.setStorageSync("cname",e.address_components[0].long_name),uni.setStorageSync("cid",e.place_id),uni.setStorageSync("addressName1",e.formatted_address),uni.setStorageSync("addressName",e.formatted_address)):"route"==t?(console.log("街区"),uni.setStorageSync("addressName2",e.formatted_address)):"street_address"==t&&(console.log("街道"),uni.setStorageSync("addressName3",e.formatted_address))}))})),setTimeout((function(){"index"==o.type&&uni.switchTab({url:"../../index/index"}),"choose"==o.type&&uni.navigateBack({delta:1})}),1e3)):window.alert("Geocoder failed due to: "+t)}))},addMarker:function(){},callback:function(e,t){if(t==google.maps.places.PlacesServiceStatus.OK)for(var n=0;n<e.length;n++){var o=e[n];searchDetail(o)}},handler:function(){var e,t=this,n=(e={zoom:this.zoom,center:this.centers,mapTypeId:"roadmap",zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"},(0,s.default)(e,"zoomControl",!1),(0,s.default)(e,"showOnLoad",!0),e),o=new google.maps.Map(document.getElementById("map"),(0,a.default)({},n)),i=new google.maps.Marker({position:this.centers,map:o}),r=new google.maps.InfoWindow({content:"您的位置"});o.addListener("click",(function(e){console.log("点击地图",e),t.centers=e.latLng;var o=new google.maps.Map(document.getElementById("map"),(0,a.default)({},n));t.geocodeLatLng(),r.open(o,i)})),o.addListener("zoom_changed",(function(){t.zoom=o.getZoom(),console.log("获取当前缩放比例",o.getZoom())}))},getAreaName:function(){console.log(this.lng,this.lat);var e=new XMLHttpRequest;e.open("get","https://maps.googleapis.com/maps/api/geocode/json?language=zh-CN&latlng=".concat(this.centers.lat,",").concat(this.centers.lng,"&key=AIzaSyBhYuu1H_BcD6hIJiIPZ5Y05K0oY63WHtw")),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);console.log(t,"逆解析之后的地址对象")}}},onSuccess:function(e){console.log(e,this,"位置信息"),this.centers.lat=Number(e.coords.latitude),this.centers.lng=Number(e.coords.longitude)},onError:function(e){switch(e.code){case e.PERMISSION_DENIED:alert("您拒绝对获取地理位置的请求");break;case e.POSITION_UNAVAILABLE:alert("位置信息是不可用的");break;case e.TIMEOUT:alert("请求您的地理位置超时");break;case e.UNKNOWN_ERROR:alert("未知错误");break}},setPlace:function(e){this.place=e},setDescription:function(e){this.description=e},usePlace:function(e){if(this.place){var t={lat:this.place.geometry.location.lat(),lng:this.place.geometry.location.lng()};this.center=t,this.markers[0].position=t,this.place=null}},updateMaker:function(e){console.log("updateMaker",e.latLng.lat()),this.markers[0].position={lat:e.latLng.lat(),lng:e.latLng.lng()}}}};t.default=i},9515:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"flex",staticStyle:{height:"60px","align-items":"center","justify-content":"space-between"}},[n("v-uni-view"),n("v-uni-input",{attrs:{id:"address",type:"text",placeholder:"请选择其他位置"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),n("v-uni-view",{staticStyle:{height:"20px",width:"1px",background:"#f5f5f5"}}),n("v-uni-view",{staticStyle:{width:"50px",height:"30px","line-height":"30px","text-align":"center",border:"1px solid #f5f5f5","border-radius":"6px","margin-right":"10px"},attrs:{id:"search"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("确定")])],1),n("gmap-map",{staticStyle:{width:"100%",height:"100vh"},attrs:{center:e.centers,id:"map"},on:{idle:function(t){arguments[0]=t=e.$handleEvent(t),e.handler.apply(void 0,arguments)}}})],1)},s=[]},ec07:function(e,t,n){"use strict";n.r(t);var o=n("9515"),a=n("f6b3");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);var i,r=n("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=c.exports},f6b3:function(e,t,n){"use strict";n.r(t);var o=n("55ef"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=a.a}}]);