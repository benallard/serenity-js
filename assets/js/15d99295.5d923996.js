"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[2848],{43636:(e,t,r)=>{r.d(t,{Iu:()=>y,yg:()=>c});var n=r(85668);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),l=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,c=p["".concat(g,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(c,o(o({ref:t},y),{},{components:r})):n.createElement(c,o({ref:t},y))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(15307),a=(r(85668),r(43636));const i={sidebar_position:2},o="Getting started",s={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting started",description:"Serenity/JS is a full-stack acceptance testing framework. Its modular design enables you to create test scenarios",source:"@site/docs/getting-started/index.mdx",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/handbook/getting-started/",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/getting-started/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Why Serenity/JS",permalink:"/handbook/"},next:{title:"Serenity/JS Project Templates",permalink:"/handbook/getting-started/project-templates"}},g={},l=[{value:"Modernising existing projects",id:"modernising-existing-projects",level:2},{value:"Upgrading from Serenity/JS 2",id:"upgrading-from-serenityjs-2",level:2},{value:"Join GitHub.com to access all the content",id:"join-githubcom-to-access-all-the-content",level:2},{value:"Your feedback matters!",id:"your-feedback-matters",level:2}],y={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started"},"Getting started"),(0,a.yg)("p",null,"Serenity/JS is a full-stack acceptance testing framework. Its modular design enables you to create test scenarios\n",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"interacting with any interface of your system"))," while reducing the number of dependencies you need."),(0,a.yg)("admonition",{title:"Get started fast",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"To get a feel for the Serenity/JS, ",(0,a.yg)("a",{parentName:"p",href:"/handbook/web-testing/your-first-web-scenario/"},"follow our 15-minute web testing tutorial")," \ud83d\ude80")),(0,a.yg)("p",null,"In this chapter, I'll give you a high-level ",(0,a.yg)("strong",{parentName:"p"},"overview of the framework")," and you'll learn about:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/project-templates/"},(0,a.yg)("strong",{parentName:"a"},"Serenity/JS Project Templates"))," - a great starting point and a reference implementation for your new test automation project"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/installation/"},(0,a.yg)("strong",{parentName:"a"},"Serenity/JS Installation"))," - for when you're ready to set up Serenity/JS locally or need to tweak the defaults"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/architecture/"},(0,a.yg)("strong",{parentName:"a"},"Serenity/JS Architecture"))," - a deeper dive into how Serenity/JS works and its philosophy"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/versioning/"},(0,a.yg)("strong",{parentName:"a"},"Serenity/JS Versioning Strategy"))," - or why it's safe to stay up to date with the latest features and patches")),(0,a.yg)("h2",{id:"modernising-existing-projects"},"Modernising existing projects"),(0,a.yg)("p",null,"With Serenity/JS you don't need to start from scratch! The framework is designed to help\nyou ",(0,a.yg)("strong",{parentName:"p"},"safely")," and ",(0,a.yg)("strong",{parentName:"p"},"progressively modernise existing codebases"),"!"),(0,a.yg)("p",null,"In the second part of this chapter, I'll show you ",(0,a.yg)("strong",{parentName:"p"},"how to add Serenity/JS")," to an existing automation project and you'll learn about:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/serenity-js-with-playwright-test/"},(0,a.yg)("strong",{parentName:"a"},"Using Serenity/JS with Playwright Test"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/serenity-js-with-protractor/"},(0,a.yg)("strong",{parentName:"a"},"Using Serenity/JS with Protractor"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/serenity-js-with-webdriverio/"},(0,a.yg)("strong",{parentName:"a"},"Using Serenity/JS with WebdriverIO")))),(0,a.yg)("h2",{id:"upgrading-from-serenityjs-2"},"Upgrading from Serenity/JS 2"),(0,a.yg)("p",null,"If you're using Serenity/JS 2, the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/upgrading-to-serenity-js-3/"},"Serenity/JS 3 upgrade guide"),"\nwill help you update your tests to benefit from all the latest features."),(0,a.yg)("h2",{id:"join-githubcom-to-access-all-the-content"},"Join GitHub.com to access all the content"),(0,a.yg)("p",null,"Serenity/JS is hosted on GitHub.com, so make sure\nto ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/signup"},"sign up for a ",(0,a.yg)("strong",{parentName:"a"},"free GitHub.com")," account")," to gain access to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js"},"Serenity/JS code repositories")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues"},"Serenity/JS issue tracker")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")),(0,a.yg)("li",{parentName:"ul"},"comments \ud83d\udcac and reactions \ud83e\udd29 on the Serenity/JS website \ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,a.yg)("h2",{id:"your-feedback-matters"},"Your feedback matters!"),(0,a.yg)("p",null,"If you like Serenity/JS, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"give it a \u2b50 star on GitHub")," and tell your friends about it!\nFor questions about Serenity/JS, check out ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Q'n'A"),",\nand make sure to join our ",(0,a.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to say hi \ud83d\udc4b"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js",alt:"GitHub stars"})),"\n",(0,a.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Serenity%2FJS-Q'n'A-FBD30B?logo=github",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"}))),(0,a.yg)("p",null,"New tutorials and videos are coming soon, follow us on ",(0,a.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"LinkedIn")," and subscribe to ",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC0RdeVPyjtJopVHvlLrXd1Q"},"Serenity/JS YouTube channel")," to get notified when they're available!"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",alt:"LinkedIn Follow"})),"\n",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch%20@serenity--js-E62117?style=for-the-badge&logo=youtube&logoColor=white",alt:"YouTube Follow"})),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,a.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))))}u.isMDXComponent=!0}}]);