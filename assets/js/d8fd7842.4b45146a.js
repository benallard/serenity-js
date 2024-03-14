"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[7722],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(89575),a=(r(14041),r(82247));const i={date:"2023-09-01T20:00",title:"3.10.1",tags:["core","deps","webdriverio"]},o="3.10.1",s={permalink:"/changelog/3.10.1",source:"@site/changelog/source/3.10.1.md",title:"3.10.1",description:"Summary",date:"2023-09-01T20:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-09-01T20:00",title:"3.10.1",tags:["core","deps","webdriverio"]},prevItem:{title:"3.10.2",permalink:"/changelog/3.10.2"},nextItem:{title:"3.10.0",permalink:"/changelog/3.10.0"},listPageLink:"/changelog/page/3"},l={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/18801"},"#18801")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.10.0...v3.10.1"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," use module: es2020 instead of Node16 to avoid issue nrwl/nx",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/18801"},"#18801")," (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/935e655a9a707ed8c97797e8b1bfab4e806c984c"},"935e655"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update dependency which to v4 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/592c3e19764632e56528dbffff41f975db3e9528"},"592c3e1"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/04b33b579ed8e501fd2037e7b218bc72ad8271d2"},"04b33b5"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"webdriverio:")," use Node16 module loader (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/105be094af2050e6ec3ae4dbb9768b8d372a5cef"},"105be09"),")")))}m.isMDXComponent=!0}}]);