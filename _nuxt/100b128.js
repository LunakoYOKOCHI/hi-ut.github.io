(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{302:function(t,e,n){var map={"./1997.json":[336,83],"./1998.json":[337,84],"./1999.json":[338,85],"./2001.json":[339,86],"./2002.json":[340,87],"./2003.json":[341,88],"./2004.json":[342,89],"./2005.json":[343,90],"./2006.json":[344,91],"./2007.json":[345,92],"./2008.json":[346,93],"./2009.json":[347,94],"./2010.json":[348,95],"./2011.json":[349,96],"./2012.json":[350,97],"./2013.json":[351,98],"./2014.json":[352,99],"./2015.json":[353,100],"./2016.json":[354,101],"./2017.json":[355,102],"./2018.json":[356,103],"./2019.json":[357,104],"./2020.json":[358,105],"./2021.json":[359,106]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=302,t.exports=r},320:function(t,e,n){"use strict";n(108);var r=n(41),o=n(62),c=n(61),l=n(49),f=n(11),h=(n(24),n(43));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).lang=t.$i18n.locale,t.select="latest",t}return n}(h.Vue);_([Object(h.Prop)({default:!1})],j.prototype,"isTop",void 0),_([Object(h.Prop)()],j.prototype,"newsList",void 0);var d=j=_([Object(h.Component)({components:{}})],j),m=n(42),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-topics"},[t.isTop?n("h2",{staticClass:"h01"},[t._v("\n    News & Topics\n    "),n("nuxt-link",{staticClass:"list",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath({name:"news-year"})}},[t._v(t._s(t.$t("一覧")))])],1):t._e(),t._v(" "),n("div",{staticClass:"page-link",class:t.isTop?"c4":""},[n("ul",[t.isTop?n("li",[n("a",{on:{click:function(e){t.select="latest"}}},[t._v(t._s(t.$t("新着一覧")))])]):t._e(),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="news"}}},[t._v(t._s(t.$t("news")))])]),n("li",[n("a",{on:{click:function(e){t.select="event"}}},[t._v(t._s(t.$t("event")))])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="data"}}},[t._v(t._s(t.$t("data")))])])])]),t._v(" "),n("div",{class:t.isTop?"data":""},[t._l(t.newsList,(function(e,r){return["latest"===t.select||t.select===e.tag?n("dl",{key:r},[n("dt",{staticClass:"mb1"},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"chip2"},[t._v(t._s(t.$t(e.tag)))])]),t._v(" "),n("dd",[n("span",{staticClass:"fc1"},[t._v(t._s(e.featured))]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}))],2)])}),[],!1,null,null,null);e.a=component.exports},513:function(t,e,n){"use strict";n.r(e);n(108);var r=n(3),o=n(41),c=n(54),l=n(62),f=n(61),h=n(49),v=n(11),_=(n(25),n(24),n(12),n(17),n(19),n(56),n(57),n(43)),j=n(320);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(l.a)(h,t);var e,f=d(h);function h(){var t;return Object(o.a)(this,h),(t=f.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t.lang=t.$i18n.locale,t}return Object(c.a)(h,[{key:"lg",get:function(){return this.$store.getters.getLg},set:function(t){this.$store.commit("setLg",t)}},{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=2021,t.next=3,n(302)("./".concat(e,".json"));case 3:return r=t.sent,o=r.default,t.abrupt("return",{year:e,newsList:o});case 6:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){return{titleTemplate:null,title:"ja"===this.$i18n.locale?"東京大学史料編纂所":"Historiographical Institute The University of Tokyo"}}},{key:"getHiPath",value:function(data){return data.includes("hi.u-tokyo.ac.jp")?data:this.baseUrl+"/"+("en"===this.lang?"en/":"")+data+"/"}}]),h}(_.Vue),k=y=m([Object(_.Component)({components:{News:j.a}})],y),w=n(42),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},["ja"===t.lang?[n("News",{attrs:{isTop:!0,newsList:t.newsList}})]:[n("p",{staticClass:"mt2 mb1"},[t._v("\n          Shiryo Hensan-jo (the Historiographical Institute, HI), the\n          University of Tokyo, has as its primary objective, rather than\n          historiography in general, analysis, compilation, and publication of\n          historical source materials concerning Japan. The Institute has\n          become a major center of Japanese historical research, and makes\n          historical sources available through its\n          "),n("a",{attrs:{href:"library"}},[t._v("library")]),t._v(",\n          "),n("nuxt-link",{attrs:{to:t.localePath({name:"publication"})}},[t._v("publications")]),t._v(", and recently,\n          "),n("a",{attrs:{href:"https://wwwap.hi.u-tokyo.ac.jp/ships-e/"}},[t._v("databases")]),t._v(".\n        ")],1)]],2),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t("組織")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:t.getHiPath("kodai")}},[t._v(t._s(t.$t("古代史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("chusei")}},[t._v(t._s(t.$t("中世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("kinsei")}},[t._v(t._s(t.$t("近世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("komo")}},[t._v(t._s(t.$t("古文書古記録部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("tokushu")}},[t._v(t._s(t.$t("特殊史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gazo")}},[t._v(t._s(t.$t("画像史料解析センター")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("cdps")}},[t._v(t._s(t.$t("前近代日本史情報国際センター")))])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"faculty"})}},[t._v(t._s(t.$t("教員一覧")))])],1),t._v(" "),"ja"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"collaboration-kyoten"})}},[t._v(t._s(t.$t("共同利用・共同研究拠点")))])],1):t._e(),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gijyutu")}},[t._v(t._s(t.$t("技術部・史料保存技術室")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("ir")}},[t._v(t._s(t.$t("IR・広報室")))])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),"ja"===t.lang?n("div",{staticClass:"foot-link",staticStyle:{background:"white"}},[n("div",{staticClass:"inner"},[t._m(3),n("nuxt-link",{staticClass:"btn01 v1",attrs:{to:t.localePath({name:"faq-slug"})}},[t._v("よくあるご質問")]),n("a",{staticClass:"btn01 v1",attrs:{href:"https://cliocyb.hi.u-tokyo.ac.jp/start.html"}},[t._v("所内用サイト")])],1)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"key-img"},[e("img",{attrs:{src:"/assets/img/common/home.jpg",width:"1050",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt2"},[e("a",{attrs:{href:"https://utf.u-tokyo.ac.jp/project/pjt10"}},[e("img",{staticStyle:{height:"90px"},attrs:{src:"/assets/img/common/btn_kihu.png",alt:"東京大学基金"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt2 mb2"},[e("a",{attrs:{href:"https://twitter.com/UTokyo_HI",target:"_blank"}},[e("img",{attrs:{src:"/assets/img/common/twitter.svg",width:"30px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn01 v1",attrs:{href:"https://clioteam.hi.u-tokyo.ac.jp/share/"}},[t._v("共同研究に"),n("br"),t._v("\n        参加されている皆様へ")])}],!1,null,null,null);e.default=component.exports}}]);