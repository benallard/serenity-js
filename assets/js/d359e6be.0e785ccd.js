"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[2692],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,y=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(89575),a=(r(14041),r(82247));const o={date:"2024-03-01T20:00",title:"3.19.0",tags:["console-reporter"]},l="3.19.0",i={permalink:"/changelog/3.19.0",source:"@site/changelog/source/3.19.0.md",title:"3.19.0",description:"Summary",date:"2024-03-01T20:00:00.000Z",formattedDate:"March 1, 2024",tags:[{label:"console-reporter",permalink:"/changelog/tags/console-reporter"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-03-01T20:00",title:"3.19.0",tags:["console-reporter"]},prevItem:{title:"3.20.0",permalink:"/changelog/3.20.0"},nextItem:{title:"3.18.1",permalink:"/changelog/3.18.1"},listPageLink:"/changelog/"},c={authorsImageUrls:[]},s=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/console-reporter")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.18.1...v3.19.0"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"console-reporter:")," fix comments (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e8b21ddb40c5addc53bdcfb212770f199f026e11"},"e8b21dd"),")")),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"console-reporter:")," global exception handling v1 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cf117f16ba6623e45b3bcf0d357a91539700f55b"},"cf117f1"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"console-reporter:")," revert to only global error handling (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a3757886275c854c8cc6d55aedbc0d26916cde9f"},"a375788"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"console-reporter:")," test with reporter developement (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/85e2bf1ad06b00aa7d917e762ce0c2e0cb964533"},"85e2bf1"),")")))}m.isMDXComponent=!0}}]);