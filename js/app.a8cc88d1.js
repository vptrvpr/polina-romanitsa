(function(t){function e(e){for(var r,a,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1d94":function(t,e,n){"use strict";n("8a59")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-carousel",{attrs:{cycle:"",interval:"3000"}},t._l(t.items,(function(t,e){return n("v-carousel-item",{key:e},[n("v-sheet",{attrs:{height:"100%",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3",staticStyle:{display:"flex","justify-content":"center",width:"100%",height:"100%"}},[n("img",{staticStyle:{height:"100%"},attrs:{src:t.src}})])])],1)],1)})),1),n("HelloWorld",{attrs:{msg:"Полина Романица (Содержанка)"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",{staticStyle:{"margin-top":"30px"}},[t._v(t._s(t.msg))]),n("h4",[t._v(" Готова ублажать и любить за ваши деньги ")]),t._m(0),n("div",[n("h3",[t._v("Характеристики")]),n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-md-3"}),n("div",{staticClass:"col-md-6"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",{staticStyle:{"font-size":"20px"}},[t._v("Рост")]),n("td",{staticStyle:{"font-size":"20px"}},[t._v("—")])]),n("tr",[n("td",{staticStyle:{"font-size":"20px"}},[t._v("Вес")]),n("td",{staticStyle:{"font-size":"20px"}},[t._v("—")])])])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-3"})])]),n("div",[n("h3",[t._v("Цена")]),n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-md-3"}),n("div",{staticClass:"col-md-6"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",{staticStyle:{"font-size":"20px"}},[t._v("Неделя")]),n("td",{staticStyle:{"font-size":"20px"}},[t._v("250 000 руб.")])])])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-3"})])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("О себе:")]),n("h5",[t._v("...")])])}],o={name:"HelloWorld",props:{msg:String}},c=o,u=(n("1d94"),n("2877")),p=Object(u["a"])(c,a,l,!1,null,"680256d4",null),d=p.exports,f={name:"App",components:{HelloWorld:d},data:function(){return{carousel:0,items:[{src:"https://sun9-75.userapi.com/impg/lYawBanESmMvQwrl3BUMpvkueCfsv89j6UE9Zw/pLH_aNDOMp4.jpg?size=828x1002&quality=96&proxy=1&sign=103cb9dc0e5b8c831be85931b5183e2c&type=album"},{src:"https://sun9-63.userapi.com/impg/2m4LtUdGq-uDDVCERnsuItNjnry-jQmIS4a-4w/ob0ZH8cxgVg.jpg?size=828x824&quality=96&proxy=1&sign=0328a609d4da34bd5d286ea304e96204&type=album"},{src:"https://sun9-7.userapi.com/impg/ltdcs3LYxXK-e3jieKpgqbACS2vXgHz5G8vI0A/wS3iudubGpc.jpg?size=828x864&quality=96&proxy=1&sign=70955d2c37129da1bc54da53fba49b7b&type=album"}]}}},v=f,y=(n("034f"),Object(u["a"])(v,s,i,!1,null,null,null)),m=y.exports,b=n("ce5b"),h=n.n(b);n("bf40");r["default"].use(h.a);var g={},_=new h.a(g);r["default"].config.productionTip=!1,new r["default"]({vuetify:_,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){},"8a59":function(t,e,n){}});
//# sourceMappingURL=app.a8cc88d1.js.map