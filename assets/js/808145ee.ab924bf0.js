"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[25168],{43636:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>u});var a=r(85668);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),y=n,u=g["".concat(o,".").concat(y)]||g[y]||m[y]||i;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},36857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(15307),n=(r(85668),r(43636));const i={date:"2023-09-15T20:00",title:"3.10.3",tags:["deps","playwright-test","rest","webdriverio"]},s="3.10.3",l={permalink:"/changelog/3.10.3",source:"@site/changelog/source/3.10.3.md",title:"3.10.3",description:"Summary",date:"2023-09-15T20:00:00.000Z",formattedDate:"September 15, 2023",tags:[{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"rest",permalink:"/changelog/tags/rest"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-09-15T20:00",title:"3.10.3",tags:["deps","playwright-test","rest","webdriverio"]},prevItem:{title:"3.10.4",permalink:"/changelog/3.10.4"},nextItem:{title:"3.10.2",permalink:"/changelog/3.10.2"},listPageLink:"/changelog/page/17"},o={authorsImageUrls:[]},p=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],c={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release addresses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1876"},"#1876")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/rest"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/rest"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,n.yg)("p",null,"Related external tickets: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/issues/24146"},"microsoft/playwright#24146")),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.10.2...v3.10.3"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update playwright dependencies to ^1.38.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0b8074b19155a38aa2009049d9a395b7026d12b3"},"0b8074b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," simplified and documented implementing custom Playwright Test fixtures (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/61fc2bce72c9758658851949afac84d573698677"},"61fc2bc"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/issues/24146"},"microsoft/playwright#24146")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"rest:")," correctly resolve relative paths in REST requests (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1bdf3eb05701007c8d640e4529f701862f223480"},"1bdf3eb"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"rest:")," improved error messages and error handling for failed requests (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e6eb0c36db0979be4c8e861cfe402094b7157024"},"e6eb0c3"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1876"},"#1876")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"webdriverio:")," updated WebdriverIO to 8.16.7 and switched to its new global types (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ecd96b2623c267923db4f79aa2ccb338f10bb09f"},"ecd96b2"),")")))}m.isMDXComponent=!0}}]);