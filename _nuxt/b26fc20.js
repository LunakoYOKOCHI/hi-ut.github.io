(window.webpackJsonp=window.webpackJsonp||[]).push([[28,7],{336:function(t,e,n){"use strict";n.r(e);n(122),n(32),n(13),n(19),n(44),n(21),n(23),n(45),n(46),n(22);var r=n(41),o=n(57),c=n(66),l=n(67),f=n(51),v=n(14),h=(n(31),n(223),n(43));function _(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).lang=t.$i18n.locale,t.select="latest",t}return Object(o.a)(n,[{key:"newsList_",get:function(){var t=this.newsList;if(this.isTop){var e,n=[],r=_(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;"1"===o.top&&n.push(o)}}catch(t){r.e(t)}finally{r.f()}t=n}else t.sort((function(a,b){return a.date<b.date?1:a.date>b.date?-1:0}));return t}},{key:"getColor",value:function(t){return"New!"===t?"color: #ff0101;":"Update!"===t?"color: #5cc2d0;":"【募集終了】"===t?"font-weight: bold;":""}}]),n}(h.Vue);m([Object(h.Prop)({default:!1})],j.prototype,"isTop",void 0),m([Object(h.Prop)()],j.prototype,"newsList",void 0);var w=j=m([Object(h.Component)({components:{}})],j),O=n(42),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-topics"},[t.isTop?n("h2",{staticClass:"h01"},[t._v("\n    News & Topics\n    "),n("nuxt-link",{staticClass:"list",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath({name:"news-year"})}},[t._v(t._s(t.$t("一覧")))])],1):t._e(),t._v(" "),n("div",{staticClass:"page-link",class:t.isTop?"c4":""},[n("ul",[t.isTop?n("li",[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.select="latest"}}},[t._v(t._s(t.$t("新着一覧")))])]):t._e(),t._v(" "),n("li",[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.select="news"}}},[t._v(t._s(t.$t("news")))])]),n("li",[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.select="event"}}},[t._v(t._s(t.$t("event")))])]),t._v(" "),n("li",[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.select="data"}}},[t._v(t._s(t.$t("data")))])])])]),t._v(" "),n("div",{class:t.isTop?"data":""},[t._l(t.newsList_,(function(e,r){return["latest"===t.select||t.select===e.tag?n("dl",{key:r},[n("dt",{staticClass:"mb1"},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"chip2"},[t._v(t._s(t.$t(e.tag)))])]),t._v(" "),n("dd",[n("span",{style:t.getColor(e.featured)},[t._v(t._s(e.featured))]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,n){var map={"./1997.json":[375,94],"./1998.json":[376,95],"./1999.json":[377,96],"./2000.json":[378,97],"./2001.json":[379,98],"./2002.json":[380,99],"./2003.json":[381,100],"./2004.json":[382,101],"./2005.json":[383,102],"./2006.json":[384,103],"./2007.json":[385,104],"./2008.json":[386,105],"./2009.json":[387,106],"./2010.json":[388,107],"./2011.json":[389,108],"./2012.json":[390,109],"./2013.json":[391,110],"./2014.json":[392,111],"./2015.json":[393,112],"./2016.json":[394,113],"./2017.json":[395,114],"./2018.json":[396,115],"./2019.json":[397,116],"./2020.json":[398,117],"./2021.json":[399,118],"./2022.json":[400,119]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=339,t.exports=r},564:function(t,e,n){"use strict";n.r(e);n(122),n(32),n(19),n(44),n(23),n(45),n(46);var r=n(4),o=n(41),c=n(57),l=n(66),f=n(67),v=n(51),h=n(14),_=(n(52),n(31),n(13),n(21),n(22),n(37),n(47),n(43)),y=n(336);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(l.a)(v,t);var e,f=j(v);function v(){var t;return Object(o.a)(this,v),(t=f.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t.lang=t.$i18n.locale,t}return Object(c.a)(v,[{key:"lg",get:function(){return this.$store.getters.getLg},set:function(t){this.$store.commit("setLg",t)}},{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var r,o,c,l,f,v,h,_,y,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,o=e.app,t.next=3,r("".concat(o.i18n.locale,"/about"),"index").fetch();case 3:return c=t.sent,l=2022,t.next=7,n(339)("./".concat(l,".json"));case 7:return f=t.sent,v=JSON.parse(JSON.stringify(f.default)),t.next=11,n(339)("./".concat(l-1,".json"));case 11:h=t.sent,_=d(JSON.parse(JSON.stringify(h.default)));try{for(_.s();!(y=_.n()).done;)m=y.value,v.push(m)}catch(t){_.e(t)}finally{_.f()}return t.abrupt("return",{year:l,newsList:v,document:c});case 15:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"head",value:function(){return{titleTemplate:null,title:"ja"===this.$i18n.locale?"東京大学史料編纂所":"Historiographical Institute The University of Tokyo"}}},{key:"getHiPath",value:function(data){return data.includes("hi.u-tokyo.ac.jp")?data:this.baseUrl+"/"+("en"===this.lang?"en/":"")+data+"/"}}]),v}(_.Vue),k=O=w([Object(_.Component)({components:{News:y.default}})],O),$=n(42),component=Object($.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-img"},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/home.jpg",width:"1050px",height:"202px",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},["ja"===t.lang?[n("News",{attrs:{isTop:!0,newsList:t.newsList}})]:[n("nuxt-content",{staticClass:"mt2 mb2",attrs:{document:t.document}}),t._v(" "),"en"!==t.lang?n("p",{staticClass:"mt2"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-slug",params:{slug:"index"}})}},[t._v(t._s(t.$t("所長挨拶")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-slug",params:{slug:"history"}})}},[t._v(t._s(t.$t("沿革")))])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"about-slug",params:{slug:"mission"}})}},[t._v(t._s(t.$t("事業")))])],1)])]):t._e()]],2),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t("組織")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:t.getHiPath("kodai")}},[t._v(t._s(t.$t("古代史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("chusei")}},[t._v(t._s(t.$t("中世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("kinsei")}},[t._v(t._s(t.$t("近世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("komo")}},[t._v(t._s(t.$t("古文書古記録部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("tokushu")}},[t._v(t._s(t.$t("特殊史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gazo")}},[t._v(t._s(t.$t("画像史料解析センター")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("cdps")}},[t._v(t._s(t.$t("前近代日本史情報国際センター")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gijyutu")}},[t._v(t._s(t.$t("技術部・史料保存技術室")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("library")}},[t._v(t._s(t.$t("図書部")))])]),t._v(" "),"ja"===t.lang||"en"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"faculty"})}},[t._v(t._s(t.$t("教員一覧")))])],1):t._e(),t._v(" "),"ja"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"collaboration-kyoten"})}},[t._v(t._s(t.$t("共同利用・共同研究拠点")))])],1):t._e(),t._v(" "),"en"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"collaboration"})}},[t._v(t._s(t.$t("共同研究")))])],1):t._e()])]),t._v(" "),n("p",{staticClass:"mt2"},[n("a",{attrs:{href:"https://www.u-tokyo.ac.jp/"}},[n("img",{staticStyle:{height:"60px"},attrs:{src:t.baseUrl+"/assets/img/common/utlogo.jpeg",alt:"東京大学基金"}})])]),t._v(" "),n("p",{staticClass:"mt2"},[n("a",{attrs:{href:"https://utf.u-tokyo.ac.jp/project/pjt10"}},[n("img",{staticStyle:{height:"90px"},attrs:{src:t.baseUrl+"/assets/img/common/btn_kihu.png",alt:"東京大学基金"}})])]),t._v(" "),n("div",{staticClass:"mt2 mb2"},[n("a",{attrs:{href:"https://twitter.com/UTokyo_HI",target:"_blank"}},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/twitter.svg",width:"40px",height:"40px"}})])])])])]),t._v(" "),(t.lang,t._e())])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{News:n(336).default})}}]);