(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,n){"use strict";var l=n(41),o=n(54),r=(n(181),n(26),n(75),function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"split",value:function(data){var e=data.indexOf("=>");return[data.substring(0,e).trim(),data.substring(e+"=>".length,data.length).trim()]}},{key:"calcYearFromSyohoVol",value:function(e){return e<=28?1965+e+"年":1964+e+"年度"}},{key:"calcSyohoVolFromYear",value:function(e){return e-1965}},{key:"calcKiyoVolFromYear",value:function(e){return e-1990}},{key:"zfill",value:function(e,t){return(Array(t).join("0")+e).slice(-t)}}]),e}());t.a=function(e,t){t("utils",new r)}},209:function(e,t,n){"use strict";n(108);var l=n(41),o=n(54),r=n(62),c=n(61),h=n(49),v=n(11),f=(n(24),n(43));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var d=function(e,t,n,desc){var l,o=arguments.length,r=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(r=(o<3?l(r):o>3?l(t,n,r):l(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},w=n(179).VueSlideToggle,m=function(e){Object(r.a)(n,e);var t=j(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).isOpenLanguageSelection=!1,e.baseUrl="https://hi-ut.github.io",e}return Object(o.a)(n,[{key:"lang",get:function(){return this.$i18n.locale}}]),n}(f.Vue),y=m=d([Object(f.Component)({components:{VueSlideToggle:w}})],m),k=n(42),_=Object(k.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"lang-select",on:{click:function(t){e.isOpenLanguageSelection=!e.isOpenLanguageSelection}}},[n("li",[n("span",[e._v("Language")]),e._v(" "),n("VueSlideToggle",{attrs:{duration:500,open:e.isOpenLanguageSelection}},[n("ul",{staticClass:"child"},["ja"!==e.lang?n("li",[n("a",{attrs:{href:e.baseUrl+"/"}},[e._v("日本語")])]):e._e(),e._v(" "),"en"!==e.lang?n("li",[n("a",{attrs:{href:e.baseUrl+"/en/"}},[e._v("English")])]):e._e()])])],1)])}),[],!1,null,null,null).exports;function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var L=function(e,t,n,desc){var l,o=arguments.length,r=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(r=(o<3?l(r):o>3?l(t,n,r):l(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},x=function(e){Object(r.a)(n,e);var t=O(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return n}(f.Vue),C=x=L([Object(f.Component)({})],x),T=Object(k.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"cse-search-box",action:"https://google.com/cse"}},[n("input",{attrs:{type:"hidden",name:"cx",value:"1e10e2c945c90dfeb"}}),e._v(" "),n("input",{attrs:{type:"hidden",name:"ie",value:"UTF-8"}}),e._v(" "),n("input",{attrs:{id:"search-box",type:"text",name:"q",size:"31",placeholder:e.$t("Googleカスタム検索")}}),e._v(" "),n("input",{attrs:{id:"search-btn",type:"submit",name:"sa",value:"."}})])}),[],!1,null,null,null).exports;function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return Object(c.a)(this,n)}}var P=function(e,t,n,desc){var l,o=arguments.length,r=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(r=(o<3?l(r):o>3?l(t,n,r):l(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},M=n(179).VueSlideToggle,S=function(e){Object(r.a)(n,e);var t=R(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).menuList=[{label:"ご案内",lang:["ja","en"],to:{name:"about-slug"},isDisplayTop:!0,children:[{label:"所長挨拶",to:{name:"about-slug"},lang:["ja","en"]},{label:"沿革",to:{name:"about-slug",params:{slug:"history"}},lang:["ja","en"]},{label:"事業",to:{name:"about-slug",params:{slug:"mission"}},lang:["ja","en"]},{label:"組織",to:{name:"about-organization"},lang:["ja","en"],children:[{label:"古代史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kodai",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kodai"},lang:["ja","en"]},{label:"中世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/chusei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/chusei"},lang:["ja","en"]},{label:"近世史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/kinsei",en:"https://www.hi.u-tokyo.ac.jp/dev/en/kinsei"},lang:["ja","en"]},{label:"古文書古記録部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/komo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/komo"},lang:["ja","en"]},{label:"特殊史料部門",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tokushu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tokushu"},lang:["ja","en"]},{label:"画像史料解析センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gazo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gazo"},lang:["ja","en"]},{label:"前近代日本史情報国際センター",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/cdps",en:"https://www.hi.u-tokyo.ac.jp/dev/en/cdps"},lang:["ja","en"]},{label:"技術部・史料保存技術室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/gijyutsu",en:"https://www.hi.u-tokyo.ac.jp/dev/en/gijyutsu"},lang:["ja","en"]},{label:"図書部",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"]},{label:"IR・広報室",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/ir",en:"https://www.hi.u-tokyo.ac.jp/dev/en/ir"},lang:["ja","en"]}]},{label:"教員一覧",to:{name:"faculty"},lang:["ja","en"]},{label:"施設",to:{name:"about-slug",params:{slug:"facilities"}},lang:["ja"]},{label:"点検・評価",to:{name:"about-slug",params:{slug:"evaluation"}},lang:["ja"]},{label:"アクセスマップ",to:{name:"about-slug",params:{slug:"access"}},lang:["ja","en"]},{label:"リンク",to:{name:"about-slug",params:{slug:"link"}},lang:["ja"]},{label:"サイトマップ",to:{name:"about-sitemap"},lang:["ja"]}]},{label:"ニュース",to:{name:"news-year"},lang:["ja"],children:[{label:"ニュース",to:{name:"news-year"},lang:["ja"]}],isDisplayTop:!1},{label:"編纂・研究・公開",lang:["ja","en"],to:{name:"publication"},isDisplayTop:!0,children:[{label:"編纂・出版",to:{name:"publication"},lang:["ja","en"],children:[{label:"大日本史料・史料綜覧",to:{name:"publication-slug",params:{slug:"dainihonshiryo_shiryosoran"}},lang:["ja","en"]},{label:"大日本古文書",to:{name:"publication-slug",params:{slug:"komonjo"}},lang:["ja","en"]},{label:"大日本古記録",to:{name:"publication-slug",params:{slug:"kokiroku"}},lang:["ja","en"]},{label:"大日本近世史料",to:{name:"publication-slug",params:{slug:"kinsei"}},lang:["ja","en"]},{label:"大日本維新史料",to:{name:"publication-slug",params:{slug:"ishin"}},lang:["ja","en"]},{label:"維新史料綱要",to:{name:"publication-slug",params:{slug:"ishinkoyo"}},lang:["ja"]},{label:"日本関係海外史料",to:{name:"publication-slug",params:{slug:"kaigai"}},lang:["ja","en"]},{label:"日本関係海外史料目録",to:{name:"publication-slug",params:{slug:"kaigaimokuroku"}},lang:["ja","en"]},{label:"正倉院文書目録",to:{name:"publication-slug",params:{slug:"shosoin"}},lang:["ja","en"]},{label:"日本荘園絵図聚影",to:{name:"publication-slug",params:{slug:"shoenezu"}},lang:["ja","en"]},{label:"花押かがみ",to:{name:"publication-slug",params:{slug:"kao"}},lang:["ja","en"]},{label:"入来院家文書",href:{ja:"http://www.hi.u-tokyo.ac.jp/iriki.html",en:"http://www.hi.u-tokyo.ac.jp/iriki.html"},lang:["en"]},{label:"その他の出版物",to:{name:"publication-slug",params:{slug:"kakushu"}},lang:["ja"]},{label:"所報",to:{name:"publication-syoho"},lang:["ja"]},{label:"研究紀要",to:{name:"publication-kiyo"},lang:["ja"]},{label:"画像解析センター通信",href:{ja:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist",en:"https://www.hi.u-tokyo.ac.jp/gazo/centernewslist"},lang:["ja"]}]},{label:"史料調査",to:{name:"investigation"},lang:["ja"]},{label:"共同研究",to:{name:"collaboration"},lang:["ja"],children:[{label:"各種成果",to:{name:"collaboration-fruits"},lang:["ja"]}]},{label:"成果公開・教育",to:{name:"conference-seminar"},lang:["ja"]},{label:"史料集版面ギャラリー",to:{name:"publication-dip"},lang:["ja","en"]}]},{label:"史料の利用",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho"},lang:["ja","en"],isDisplayTop:!0,children:[{label:"お知らせ",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/"},lang:["ja","en"]},{label:"図書室利用（閲覧手続き）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/etsuran",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/etsuran"},lang:["ja"]},{label:"図書室利用（複製・掲載・放映等）",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/shiryoriyo",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/shiryoriyo"},lang:["ja"]},{label:"所蔵史料の検索",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/kensaku",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/kensaku"},lang:["ja"]},{label:"お問い合わせ・連絡先",href:{ja:"https://www.hi.u-tokyo.ac.jp/dev/tosho/toiawase",en:"https://www.hi.u-tokyo.ac.jp/dev/en/tosho/toiawase"},lang:["ja"]}]},{label:"データベース検索",lang:["ja","en"],isDisplayTop:!0,children:[{label:"データベース検索",lang:["ja","en"],href:{ja:"http://wwwap.hi.u-tokyo.ac.jp/ships/",en:"https://wwwap.hi.u-tokyo.ac.jp/ships/shipscontroller-e"}}]},{label:"所蔵史料紹介",isDisplayTop:!0,to:{name:"collection-slug"},lang:["ja","en"],children:[{label:"概要",to:{name:"collection-slug"},lang:["ja","en"]},{label:"貴重書",to:{name:"collection-slug",params:{slug:"collection02"}},lang:["ja"]},{label:"特殊蒐書",to:{name:"collection-slug",params:{slug:"collection03"}},lang:["ja"]},{label:"その他の貴重書",to:{name:"collection-slug",params:{slug:"collection04"}},lang:["ja"]},{label:"１階展示案内",to:{name:"collection-slug",params:{slug:"exhibition"}},lang:["ja"]},{label:"デジタルギャラリー",to:{name:"collection-slug",params:{slug:"degitalgallary"}},lang:["ja"]}]},{label:"国際交流",isDisplayTop:!0,to:{name:"exchange"},lang:["ja","en"],children:[{label:"国際交流",to:{name:"exchange"},lang:["ja","en"]}]},{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"],isDisplayTop:!1,children:[{label:"よくあるご質問",to:{name:"faq-slug"},lang:["ja"]},{label:"ビューアについて",to:{name:"faq-slug",params:{slug:"viewer"}},lang:["ja"]},{label:"データベースにおける文字について",to:{name:"faq-slug",params:{slug:"kanjiv"}},lang:["ja"]},{label:"利用条件：史料画像データの利用",to:{name:"faq-slug",params:{slug:"reuse"}},lang:["ja"]}]}],e.currentLv1Index=-1,e.currentLv2Index=-1,e.isOpenLv1=!1,e.isOpenLv2=!1,e.isMobileMenuOpen=!1,e.baseUrl="https://hi-ut.github.io",e.isPageTopBtnActive=!1,e}return Object(o.a)(n,[{key:"onUrlChange",value:function(){this.isMobileMenuOpen=!1,this.currentLv1Index=-1,this.currentLv2Index=-1,this.isOpenLv1=!1,this.isOpenLv2=!1}},{key:"lg",get:function(){return this.$store.getters.getLg},set:function(e){this.$store.commit("setLg",e)}},{key:"mounted",value:function(){this.lg=this.getLg(),window.addEventListener("scroll",this.scrollWindow),window.addEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(){this.lg=this.getLg()}},{key:"getLg",value:function(){return window.innerWidth>769}},{key:"returnTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"scrollWindow",value:function(){100<=window.scrollY?this.isPageTopBtnActive=!0:this.isPageTopBtnActive=!1}},{key:"lang",get:function(){return this.$i18n.locale}},{key:"langStr",get:function(){switch(this.lang){case"ja":return"日本語";case"en":return"English";case"zh":return"Chinese"}}},{key:"clickLv1Menu",value:function(e){var t=this.currentLv1Index;this.isOpenLv1=t!==e||!this.isOpenLv1,this.currentLv1Index=e}},{key:"clickLv2Menu",value:function(e){var t=this.currentLv2Index;this.isOpenLv2=t!==e||!this.isOpenLv2,this.currentLv2Index=e}}]),n}(f.Vue);P([Object(f.Watch)("$route")],S.prototype,"onUrlChange",null);var $=S=P([Object(f.Component)({components:{VueSlideToggle:M,LangSelect:_,GoogleCustomSearch:T}})],S),I=Object(k.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isMobileMenuOpen?"gnav-open":""},[n("div",{staticClass:"overlay",attrs:{id:"js__overlay"}}),e._v(" "),n("div",{staticClass:"wrapper",attrs:{id:"wrapper"}},[n("header",{attrs:{id:"header"}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"header-logo"},[n("h1",[n("nuxt-link",{attrs:{to:e.localePath({name:"index"})}},[n("img",{attrs:{src:e.baseUrl+"/assets/img/common/hilogo.jpg",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])],1)]),e._v(" "),e.lg?[n("GoogleCustomSearch"),e._v(" "),n("LangSelect")]:e._e(),e._v(" "),n("div",{staticClass:"nav_toggle",attrs:{id:"js__sideMenuBtn"},on:{click:function(t){e.isMobileMenuOpen=!e.isMobileMenuOpen}}},[e._m(0)])],2)]),e._v(" "),n("nav",{staticClass:"gnav",attrs:{id:"js_gnav"}},[e.isMobileMenuOpen?n("GoogleCustomSearch"):e._e(),e._v(" "),n("ul",{staticClass:"menu"},[e._l(e.menuList,(function(t,l){return[t.lang.includes(e.lang)&&t.isDisplayTop?n("li",{key:l},[n("span",{staticClass:"atag",on:{click:function(t){return e.clickLv1Menu(l)}}},[e._v(e._s(e.$t(t.label)))]),e._v(" "),n("i",{staticClass:"child-btn",on:{click:function(t){return e.clickLv1Menu(l)}}}),e._v(" "),n("VueSlideToggle",{staticClass:"sub-menu",attrs:{duration:500,tag:"ul",open:e.isOpenLv1&&e.currentLv1Index===l}},[e._l(t.children,(function(t,l){return[t.lang.includes(e.lang)?n("li",{key:l,class:e.isOpenLv2&&e.currentLv2Index===l?"child-open":""},[t.href?[n("a",{attrs:{href:t.href[e.lang]}},[e._v(e._s(e.$t(t.label)))])]:[n("nuxt-link",{attrs:{to:e.localePath(t.to)}},[e._v(e._s(e.$t(t.label)))])],e._v(" "),t.children?[n("i",{staticClass:"child-btn",on:{click:function(t){return e.clickLv2Menu(l)}}}),e._v(" "),n("VueSlideToggle",{staticClass:"sub-menu2",attrs:{duration:500,tag:"ul",open:e.isOpenLv2&&e.currentLv2Index===l}},[e._l(t.children,(function(t,l){return[t.lang.includes(e.lang)?n("li",{key:l},[t.href?[n("a",{attrs:{href:t.href[e.lang]}},[e._v(e._s(e.$t(t.label)))])]:[n("nuxt-link",{attrs:{to:e.localePath(t.to)}},[e._v(e._s(e.$t(t.label)))])]],2):e._e()]}))],2)]:e._e()],2):e._e()]}))],2)],1):e._e()]}))],2),e._v(" "),e.isMobileMenuOpen?n("LangSelect"):e._e()],1)]),e._v(" "),n("nuxt"),e._v(" "),n("footer",{attrs:{id:"footer"}},[n("transition",{attrs:{name:"button"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.isPageTopBtnActive,expression:"isPageTopBtnActive"}],attrs:{id:"page-top"},on:{click:e.returnTop}})]),e._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"foot-add"},[n("p",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:e.localePath({name:"index"})}},[n("img",{attrs:{src:e.baseUrl+"/assets/img/common/logo_foot.png",alt:"東京大学史料編纂所 Historiographical Institute The University of Tokyo"}})])],1),e._v(" "),n("p",["ja"==e.lang?[e._v("\n            東京大学史料編纂所 所長：保谷 徹"),n("br"),e._v("\n            所在地：〒113-0033 東京都文京区本郷７丁目３番１号\n          ")]:[e._v("\n            Director : Hoya, Toru"),n("br"),e._v("\n            Address: 3-1, Hongo 7-chome, Bunkyo-ku, Tokyo 113-0033, JAPAN\n          ")]],2),e._v(" "),n("br"),e._v(" "),n("p",{staticClass:"contct"},[n("nuxt-link",{staticClass:"btn01 v3",attrs:{to:e.localePath({name:"inquery"})}},[e._v(e._s(e.$t("お問い合わせ")))])],1)]),e._v(" "),n("aside",{staticClass:"foot-nav"},[n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:e.localePath({name:"index"})}},[e._v("■ HOME")])],1),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:e.localePath({name:"about-sitemap"})}},[e._v("■ "+e._s(e.$t("サイトマップ")))])],1),e._v(" "),"ja"===e.lang?n("li",[n("nuxt-link",{attrs:{to:e.localePath({name:"about-slug",params:{slug:"link"}})}},[e._v("■ "+e._s(e.$t("リンク")))])],1):e._e(),e._v(" "),n("li",[n("nuxt-link",{attrs:{to:e.localePath({name:"about-slug",params:{slug:"access"}})}},[e._v("■ "+e._s(e.$t("アクセスマップ")))])],1)]),e._v(" "),n("ul")]),e._v(" "),n("small",[e._v("\n          © 1997 Historiographical Institute The University of Tokyo.\n          ")])])])],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ellipsis-v"},[n("span",{staticClass:"point top"}),e._v(" "),n("span",{staticClass:"point mid"}),e._v(" "),n("span",{staticClass:"point bot"})])}],!1,null,null,null);t.a=I.exports},213:function(e,t,n){e.exports=n(214)},249:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return l})),n.d(t,"mutations",(function(){return o})),n.d(t,"getters",(function(){return r}));var l=function(){return{lg:!0}},o={setLg:function(e,t){e.lg=t}},r={getLg:function(e){return e.lg}}}},[[213,35,2,36]]]);