(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-baiduMap-index-index"],{"4e69":function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{},[o("gmap-map",{staticStyle:{width:"100%",height:"100vh"},attrs:{center:e.centers,id:"map"},on:{idle:function(t){arguments[0]=t=e.$handleEvent(t),e.handler.apply(void 0,arguments)}}})],1)},s=[]},"55ef":function(e,t,o){"use strict";var n=o("4ea4");o("a4d3"),o("e01a"),o("99af"),o("d81d"),o("a9e3"),o("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("5530")),s=n(o("ade3")),i={data:function(){return{lat:"",lng:"",centers:{lat:0,lng:0},markers:[{position:{lat:39.90419989999999,lng:116.4073963}}],place:null,zoom:16,type:"",address:"",addressObj:""}},onLoad:function(e){this.type=e.type,uni.removeStorageSync("firstLogin")},description:"Autocomplete Example (#164)",mounted:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError):alert("当前环境不支持地理位置服务")},methods:{search:function(){var e=this,t=new XMLHttpRequest;t.open("get","https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.address,"&key=AIzaSyBhYuu1H_BcD6hIJiIPZ5Y05K0oY63WHtw")),t.send(),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&(e.addressObj=JSON.parse(t.responseText),console.log(e.addressObj,"搜索地址"))}},getLoc:function(){var e="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&key=AIzaSyBhYuu1H_BcD6hIJiIPZ5Y05K0oY63WHtw";this.$jsonp(e).then((function(e){console.log(e,"搜索附近地址结果")}))},codeAddress:function(){var e=document.getElementById("address").value;geocoder.geocode({address:e},(function(t,o){if(o==google.maps.GeocoderStatus.OK){map.setCenter(t[0].geometry.location);var n=new google.maps.Marker({map:map,position:t[0].geometry.location,title:e,animation:google.maps.Animation.DROP}),a="地址: "+t[0].formatted_address,s=new google.maps.InfoWindow({content:"<span style=‘font-size:11px‘><b>名称: </b>"+e+"<br>"+a+"</span>",pixelOffset:0,position:t[0].geometry.location});s.open(map,n),google.maps.event.addListener(n,"click",(function(){s.open(map,n)}))}else alert("Geocode was not successful for the following reason: "+o)}))},geocodeLatLng:function(e,t,o){var n=this,a=parseFloat(this.centers.lat),s=parseFloat(this.centers.lng);new google.maps.LatLng(a,s);(new google.maps.Geocoder).geocode({location:this.centers},(function(e,t){"OK"===t?(console.log(e,"地址数组"),e.map((function(e,t){console.log(e,"地址信息子项"),e.types.map((function(t,o){"administrative_area_level_1"==t||"political"==t?(uni.setStorageSync("pname",e.address_components[0].long_name),uni.setStorageSync("pid",e.place_id)):"administrative_area_level_2"!=t&&"political"!=t||(uni.setStorageSync("cname",e.address_components[0].long_name),uni.setStorageSync("cid",e.place_id),uni.setStorageSync("addressName",e.formatted_address))}))})),setTimeout((function(){"index"==n.type?uni.switchTab({url:"../../index/index"}):uni.navigateBack({delta:1})}),1e3)):window.alert("Geocoder failed due to: "+t)}))},addMarker:function(){},callback:function(e,t){if(t==google.maps.places.PlacesServiceStatus.OK)for(var o=0;o<e.length;o++){var n=e[o];searchDetail(n)}},handler:function(){var e=this,t=(0,s.default)({zoom:this.zoom,center:this.centers,mapTypeId:"roadmap",zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"},"zoomControl",!1),o=new google.maps.Map(document.getElementById("map"),(0,a.default)({},t)),n=new google.maps.Marker({position:this.centers,map:o}),i=new google.maps.InfoWindow({content:"您的位置"});o.addListener("click",(function(o){console.log("点击地图",o),e.centers=o.latLng;var s=new google.maps.Map(document.getElementById("map"),(0,a.default)({},t));e.geocodeLatLng(),i.open(s,n)})),o.addListener("zoom_changed",(function(){e.zoom=o.getZoom(),console.log("获取当前缩放比例",o.getZoom())}))},getAreaName:function(){console.log(this.lng,this.lat);var e=new XMLHttpRequest;e.open("get","https://maps.googleapis.com/maps/api/geocode/json?language=zh-CN&latlng=".concat(this.centers.lat,",").concat(this.centers.lng,"&key=AIzaSyBhYuu1H_BcD6hIJiIPZ5Y05K0oY63WHtw")),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);console.log(t,"逆解析之后的地址对象")}}},onSuccess:function(e){console.log(e,this,"位置信息"),this.centers.lat=Number(e.coords.latitude),this.centers.lng=Number(e.coords.longitude)},onError:function(e){switch(e.code){case e.PERMISSION_DENIED:alert("您拒绝对获取地理位置的请求");break;case e.POSITION_UNAVAILABLE:alert("位置信息是不可用的");break;case e.TIMEOUT:alert("请求您的地理位置超时");break;case e.UNKNOWN_ERROR:alert("未知错误");break}},setPlace:function(e){this.place=e},setDescription:function(e){this.description=e},usePlace:function(e){if(this.place){var t={lat:this.place.geometry.location.lat(),lng:this.place.geometry.location.lng()};this.center=t,this.markers[0].position=t,this.place=null}},updateMaker:function(e){console.log("updateMaker",e.latLng.lat()),this.markers[0].position={lat:e.latLng.lat(),lng:e.latLng.lng()}}}};t.default=i},ec07:function(e,t,o){"use strict";o.r(t);var n=o("4e69"),a=o("f6b3");for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);var i,r=o("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=c.exports},f6b3:function(e,t,o){"use strict";o.r(t);var n=o("55ef"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a}}]);