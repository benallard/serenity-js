"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[1508],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,u=g["".concat(l,".").concat(m)]||g[m]||y[m]||i;return r?a.createElement(u,s(s({ref:t},p),{},{components:r})):a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(89575),n=(r(14041),r(82247));const i={date:"2023-03-10T20:00",title:"3.0.0-rc.43",tags:["core","deps","playwright-test","protractor","webdriverio"]},s="3.0.0-rc.43",o={permalink:"/changelog/3.0.0-rc.43",source:"@site/changelog/source/3.0.0-rc.43.md",title:"3.0.0-rc.43",description:"Summary",date:"2023-03-10T20:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-10T20:00",title:"3.0.0-rc.43",tags:["core","deps","playwright-test","protractor","webdriverio"]},prevItem:{title:"3.0.0-rc.44",permalink:"/changelog/3.0.0-rc.44"},nextItem:{title:"3.0.0-rc.42",permalink:"/changelog/3.0.0-rc.42"},listPageLink:"/changelog/page/6"},l={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/protractor"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.42...v3.0.0-rc.43"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," introduced Cast.where factory method to make it easier to generate custom casts of actors (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/26637f10746bbd264ab73ab14b43eaf11dea5652"},"26637f1"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1523"},"#1523")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency deepmerge to ^4.3.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ac08d091eb61a666c9b9c53209b59fe7157c06d9"},"ac08d09"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency yargs to ^17.7.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1e7a52b21a778ebc47b6279786391d96e482b57a"},"1e7a52b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update playwright dependencies to ^1.31.2 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ebac2ff37b7a922686daed0201d122f52b1d1040"},"ebac2ff"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1531"},"#1531"),") (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4a58010759d5f3d00919dc5de315b46fa9fadd7f"},"4a58010"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," ensure each new actor gets their own Playwright browser (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f4c527b27446e32c31a230de3a4d29575ecc8c34"},"f4c527b"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1523"},"#1523")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"protractor:")," default actors receive abilities to BrowseTheWebWithProtractor and TakeNotes (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/edcf73426827ad76427deb457786b163423aaf96"},"edcf734"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1523"},"#1523")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"webdriverio:")," default actors receive abilities to BrowseTheWebWithWebdriverIO and TakeNotes (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3880d3be3262dfa601f0ec31fa1518569b14b90b"},"3880d3b"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1523"},"#1523"))))}y.isMDXComponent=!0}}]);