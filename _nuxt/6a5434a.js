(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{311:function(t,e,n){t.exports=n.p+"img/home.5674d4f.jpg"},316:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"key-img"},[e("img",{attrs:{src:n(311),width:"1050",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn01 v1",attrs:{href:"https://clioteam.hi.u-tokyo.ac.jp/share/"}},[t._v("共同研究に"),n("br"),t._v("\n          参加されている皆様へ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"fc2",attrs:{href:"shakairenkei/srindex.html"}},[t._v("社会連携研究部門は"),n("br"),t._v("\n            2013年3月に時限を迎えました。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt1"},[e("a",{attrs:{href:"https://twitter.com/UTokyo_HI",target:"_blank"}},[e("img",{attrs:{src:"https://www.hi.u-tokyo.ac.jp/common/images/Twitter_Social_Icon_Square_Color.png",width:"45px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn01 v1",attrs:{href:"https://clioteam.hi.u-tokyo.ac.jp/share/"}},[t._v("共同研究に"),n("br"),t._v("\n        参加されている皆様へ")])}],c=(n(111),n(31)),o=n(44),l=n(68),f=n(67),_=n(51),v=n(13),h=(n(30),n(59),n(60),n(45)),d=n(5),y=(n(28),n(57)),m=n.n(y);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(_.a)(t);if(e){var c=Object(_.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},w=function(t){Object(l.a)(r,t);var e,n=j(r);function r(){var t;return Object(c.a)(this,r),(t=n.apply(this,arguments)).newsList=[],t.baseUrl="https://hi-ut.github.io",t.lang=t.$i18n.locale,t.select="latest",t}return Object(o.a)(r,[{key:"mounted",value:(e=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.baseUrl+"/assets/json/news/"+("ja"===this.lang?"":"en/"),t.prev=1,t.next=4,m.a.get(e+this.year+".json");case 4:n=t.sent,this.newsList=n.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(){return e.apply(this,arguments)})}]),r}(h.Vue);k([Object(h.Prop)({default:!1})],w.prototype,"isTop",void 0),k([Object(h.Prop)()],w.prototype,"year",void 0);var $=w=k([Object(h.Component)({components:{}})],w),O=n(43),C=Object(O.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-topics"},[t.isTop?n("h2",{staticClass:"h01"},[t._v("\n    News & Topics\n    "),n("nuxt-link",{staticClass:"list",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath({name:"news-year"})}},[t._v(t._s(t.$t("一覧")))])],1):t._e(),t._v(" "),n("div",{staticClass:"page-link",class:t.isTop?"c4":""},[n("ul",[t.isTop?n("li",[n("a",{on:{click:function(e){t.select="latest"}}},[t._v(t._s(t.$t("新着一覧")))])]):t._e(),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="news"}}},[t._v(t._s(t.$t("news")))])]),n("li",[n("a",{on:{click:function(e){t.select="event"}}},[t._v(t._s(t.$t("event")))])]),t._v(" "),n("li",[n("a",{on:{click:function(e){t.select="data"}}},[t._v(t._s(t.$t("data")))])])])]),t._v(" "),n("div",{class:t.isTop?"data":""},[t._l(t.newsList,(function(e,r){return["latest"===t.select||t.select===e.tag?n("dl",{key:r},[n("dt",{staticClass:"mb1"},[t._v("\n          "+t._s(e.date)+"\n          "),t._v(" "),n("span",{staticClass:"chip2"},[t._v(t._s(t.$t(e.tag)))])]),t._v(" "),n("dd",[n("span",{staticClass:"fc1"},[t._v(t._s(e.featured))]),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}))],2)])}),[],!1,null,null,null).exports;function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(_.a)(t);if(e){var c=Object(_.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var R=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},x=function(t){Object(l.a)(n,t);var e=P(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io",t.lang=t.$i18n.locale,t}return Object(o.a)(n,[{key:"lg",get:function(){return this.$store.getters.getLg},set:function(t){this.$store.commit("setLg",t)}},{key:"year",get:function(){var t=(new Date).getFullYear();return(new Date).getMonth()+1<4?t-1:t}},{key:"head",value:function(){return{titleTemplate:null,title:"ja"===this.$i18n.locale?"東京大学史料編纂所":"Historiographical Institute The University of Tokyo"}}},{key:"getHiPath",value:function(data){return data.includes("hi.u-tokyo.ac.jp")?data:this.baseUrl+"/"+("en"===this.lang?"en/":"")+data+"/"}}]),n}(h.Vue),T=x=R([Object(h.Component)({components:{News:C}})],x),H=Object(O.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[n("News",{attrs:{isTop:!0,year:t.year}}),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.$t("組織")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:t.getHiPath("kodai")}},[t._v(t._s(t.$t("古代史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("chusei")}},[t._v(t._s(t.$t("中世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("kinsei")}},[t._v(t._s(t.$t("近世史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("komo")}},[t._v(t._s(t.$t("古文書古記録部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("tokushu")}},[t._v(t._s(t.$t("特殊史料部門")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gazo")}},[t._v(t._s(t.$t("画像史料解析センター")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("cdps")}},[t._v(t._s(t.$t("前近代日本史情報国際センター")))])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"faculty"})}},[t._v(t._s(t.$t("教員一覧")))])],1),t._v(" "),"ja"===t.lang?n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"collaboration-kyoten"})}},[t._v(t._s(t.$t("共同利用・共同研究拠点")))])],1):t._e(),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("gijyutu")}},[t._v(t._s(t.$t("技術部・史料保存技術室")))])]),t._v(" "),n("li",[n("a",{attrs:{href:t.getHiPath("ir")}},[t._v(t._s(t.$t("IR・広報室")))])])])]),t._v(" "),t._e(),t._v(" "),n("div",{staticClass:"frame02 mt2"},[n("p",[n("a",{attrs:{href:"https://utf.u-tokyo.ac.jp/"}},[n("img",{attrs:{src:t.baseUrl+"/assets/img/common/btn_kihu.png",alt:"東京大学基金"}})])]),t._v(" "),n("a",{staticClass:"btn01 v2",attrs:{href:"https://utf.u-tokyo.ac.jp/project/pjt10"}},[n("em",[t._v(t._s(t.$t("史料編纂所基金")))]),"ja"===t.lang?[t._v("（部局基金）")]:t._e()],2)]),t._v(" "),t._e(),t._v(" "),t._m(3)])])]),t._v(" "),"ja"===t.lang?n("div",{staticClass:"foot-link",staticStyle:{background:"white"}},[n("div",{staticClass:"inner"},[t._m(4),n("nuxt-link",{staticClass:"btn01 v1",attrs:{to:t.localePath({name:"faq-slug"})}},[t._v("よくあるご質問")]),n("a",{staticClass:"btn01 v1",attrs:{href:"https://cliocyb.hi.u-tokyo.ac.jp/start.html"}},[t._v("所内用サイト")])],1)]):t._e(),t._v(" "),t._e()])}),r,!1,null,null,null);e.default=H.exports}}]);