"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[66484],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,y=m["".concat(s,".").concat(u)]||m[u]||g[u]||i;return r?a.createElement(y,o(o({ref:t},p),{},{components:r})):a.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(89575),n=(r(14041),r(82247));const i={date:"2024-03-04T20:00",title:"3.21.0",tags:["jasmine","mocha","playwright-test"]},o="3.21.0",l={permalink:"/changelog/3.21.0",source:"@site/changelog/source/3.21.0.md",title:"3.21.0",description:"Summary",date:"2024-03-04T20:00:00.000Z",formattedDate:"March 4, 2024",tags:[{label:"jasmine",permalink:"/changelog/tags/jasmine"},{label:"mocha",permalink:"/changelog/tags/mocha"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-03-04T20:00",title:"3.21.0",tags:["jasmine","mocha","playwright-test"]},nextItem:{title:"3.20.0",permalink:"/changelog/3.20.0"},listPageLink:"/changelog/"},s={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/jasmine"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/mocha"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/mocha"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.20.0...v3.21.0"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," support for reporting tags registered using the new Playwright 1.42 tags API (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9d571573cd9d8b52ddcb286f1160c7011dea7590"},"9d57157"),")")),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"jasmine:")," support for custom tags (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/47f93d86fecc49a793dc5e8052b82f5115ca5b98"},"47f93d8"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"mocha:")," support for custom tags (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b86f2bb98305ba2491e7a2728aa38431ea8f716c"},"b86f2bb"),")")))}g.isMDXComponent=!0}}]);