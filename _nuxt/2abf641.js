(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{431:function(t,e,n){"use strict";n.r(e);n(110);var r=n(41),c=n(56),l=n(62),o=n(63),f=n(52),v=n(11),d=(n(24),n(43));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentFiscalYear=2021,t.label=t.$t("ニュース"),t.items=[{text:"HOME",disabled:!1,to:t.localePath({name:"index"}),exact:!0},{text:t.$t(t.label),disabled:!1,to:t.localePath({name:"news-year"}),exact:!0},{text:t.title}],t}return Object(c.a)(n,[{key:"years",get:function(){for(var t=[],i=this.currentFiscalYear-1;i>=1997;i--)2e3!==i&&t.push(i);return t}}]),n}(d.Vue);y([Object(d.Prop)()],h.prototype,"title",void 0);var m=h=y([Object(d.Component)({components:{}})],h),O=n(42),component=Object(O.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"key-common"},[n("div",{staticClass:"inner"},[n("p",{staticClass:"ttl"},[t._v(t._s(t.label))])])]),t._v(" "),n("div",{staticClass:"breadcrumb"},[n("ul",t._l(t.items,(function(e,r){return n("li",{key:r},[e.to?[n("nuxt-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])]:[t._v("\n          "+t._s(e.text)+"\n        ")]],2)})),0)]),t._v(" "),n("div",{staticClass:"contents-wrap"},[n("main",{staticClass:"main-contents",attrs:{id:"main-contents"}},[t._t("default"),t._v(" "),n("section")],2),t._v(" "),n("div",{attrs:{id:"sidebar"}},[n("aside",[n("nav",[n("h2",[t._v(t._s(t.label))]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year"})}},[t._v("\n                "+t._s(t.$t("今年度のニュース"))+"\n              ")])],1),t._v(" "),t._l(t.years,(function(e,r){return n("li",{key:r},[n("nuxt-link",{attrs:{to:t.localePath({name:"news-year",params:{year:e}})}},[t._v("\n                "+t._s(e)+t._s(t.$t("年度のニュース"))+"\n              ")])],1)}))],2)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);