"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[38472],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7896),a=(r(2784),r(30876));const i={date:"2023-04-02T20:00",title:"3.1.0",tags:["core","cucumber"]},o="3.1.0",c={permalink:"/changelog/3.1.0",source:"@site/changelog/source/3.1.0.md",title:"3.1.0",description:"Summary",date:"2023-04-02T20:00:00.000Z",formattedDate:"April 2, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"cucumber",permalink:"/changelog/tags/cucumber"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-04-02T20:00",title:"3.1.0",tags:["core","cucumber"]},prevItem:{title:"3.1.1",permalink:"/changelog/3.1.1"},nextItem:{title:"3.0.1",permalink:"/changelog/3.0.1"},listPageLink:"/changelog/page/32"},l={authorsImageUrls:[]},u=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cucumber"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/cucumber")))),(0,a.kt)("p",null,"View detailed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.1...v3.1.0"},"code diff")," on GitHub"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," pinned dependencies on Serenity/JS modules (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b314b11a3755e490b307df0eca8369a9371b7bb8"},"b314b11"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," replaced dependency on depracated cuid with cuid2 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0417f1c2c673dce7eaabe0ffae76311757e3b3ee"},"0417f1c"),")")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cucumber:")," support for Cucumber 9 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ec7823e384a47ae96a6006e52a58163020c0f851"},"ec7823e"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1431"},"#1431"))))}m.isMDXComponent=!0}}]);