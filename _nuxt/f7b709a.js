(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,n){"use strict";n.r(e);n(113),n(22),n(10),n(17),n(34),n(16),n(19),n(35),n(36),n(18);var r=n(45),o=n(57),c=n(63),f=n(64),l=n(54),d=n(13),y=(n(26),n(219),n(47));function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentFiscalYear=2021,t.mapping={COE:"中核的研究拠点（COE）形成基礎研究費",sosei:"学術創成研究費",S:"基盤研究(S)",A:"基盤研究(A)",B:"基盤研究(B)",C:"基盤研究(C)",hoga:"挑戦的萌芽研究",wakate_a:"若手研究(A)",wakate_b:"若手研究(B)",wakate:"若手研究",wakate_start:"若手研究(スタートアップ)",start:"研究活動スタート支援",shorei:"奨励研究",tokutei:"特定領域研究"},t}return Object(o.a)(n,[{key:"items",get:function(){var t,e=this.past,n=this.currentFiscalYear,r=[],o=v(this.data);try{for(o.s();!(t=o.n()).done;){var c,f=t.value,l=[],d=v(f.data);try{for(d.s();!(c=d.n()).done;){var y=c.value;(e?y.end<n:y.end>=n)&&l.push(y)}}catch(t){d.e(t)}finally{d.f()}l.sort((function(a,b){return a.kaken<b.kaken?1:a.kaken>b.kaken?-1:0})),f.data=l,r.push(f)}}catch(t){o.e(t)}finally{o.f()}return r}}]),n}(y.Vue);_([Object(y.Prop)()],m.prototype,"data",void 0),_([Object(y.Prop)({default:!1})],m.prototype,"past",void 0);var O=m=_([Object(y.Component)({components:{}})],m),j=n(46),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.items,(function(e,i){return e.data.length>0?[n("div",{key:e.type,staticClass:"mb2"},[n("h3",{staticClass:"h04"},[t._v(t._s(t.mapping[e.type]))]),t._v(" "),n("ul",[t._l(e.data,(function(e,r){return[(t.past?e.end<t.currentFiscalYear:e.end>=t.currentFiscalYear)?n("li",{key:r},[e.kaken?[n("a",{attrs:{href:"https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-"+e.kaken+"/"}},[t._v(t._s(e.title))])]:[t._v("\n              "+t._s(e.title)+"\n            ")],t._v("\n            （"+t._s(e.start)+"～"+t._s(e.end)+"年度）\n            "),e.url2?n("p",[n("a",{attrs:{href:e.url2}},[t._v("プロジェクトのページへ")])]):t._e()],2):t._e()]}))],2)])]:t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);