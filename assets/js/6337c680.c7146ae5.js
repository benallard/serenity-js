"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[4983],{82247:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>y});var n=t(14041);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,y=g["".concat(s,".").concat(d)]||g[d]||m[d]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(89575),a=(t(14041),t(82247));const o={sidebar_position:9},i="Reporting",p={unversionedId:"reporting/index",id:"reporting/index",title:"Reporting",description:"Just like the core design patterns in your Serenity/JS scenarios revolve around the system metaphor",source:"@site/docs/reporting/index.mdx",sourceDirName:"reporting",slug:"/reporting/",permalink:"/handbook/reporting/",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/reporting/index.mdx",tags:[],version:"current",lastUpdatedBy:"Jan Molak",lastUpdatedAt:1710354606,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"WebdriverIO",permalink:"/handbook/test-runners/webdriverio"},next:{title:"Domain Events",permalink:"/handbook/reporting/domain-events"}},s={},c=[],l={toc:c},g="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"reporting"},"Reporting"),(0,a.yg)("p",null,"Just like the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/"},"core design patterns")," in your Serenity/JS scenarios revolve around the ",(0,a.yg)("a",{parentName:"p",href:"http://www.extremeprogramming.org/rules/metaphor.html"},"system metaphor"),"\nof a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"stage performance"),", Serenity/JS reporting services follow the metaphor of a ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Running_crew"},(0,a.yg)("em",{parentName:"a"},"stage crew")),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},(0,a.yg)("inlineCode",{parentName:"a"},"StageCrewMembers"))," observe the ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," on ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Stage"},(0,a.yg)("inlineCode",{parentName:"a"},"Stage")),",\nwatch the ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Activity"},(0,a.yg)("inlineCode",{parentName:"a"},"Activities"))," they perform, and listen to the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"domain events")," emitted by their environment.\nThey use the information they gather to ",(0,a.yg)("a",{parentName:"p",href:"/api/core-events/class/ArtifactGenerated"},"generate artifacts"),", such as test reports,\nproduce more events to prompt other crew members to action, or perform side effects like printing to the terminal, writing files to disk, or performing network or database calls."),(0,a.yg)("p",null,"Several of the Serenity/JS modules provide ",(0,a.yg)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},(0,a.yg)("inlineCode",{parentName:"a"},"StageCrewMembers"))," you can use for test reporting purposes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},"Console Reporter")," - writes text-based test reports to your computer terminal,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD Reporter")," - emits ",(0,a.yg)("a",{parentName:"li",href:"https://serenity-bdd.github.io/"},"Serenity BDD"),"-compatible JSON reports, to be archived via ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/artifact-archiver"},(0,a.yg)("inlineCode",{parentName:"a"},"ArtifactArchiver"))," and consumed by the ",(0,a.yg)("a",{parentName:"li",href:"/api/serenity-bdd/#serenity-bdd-living-documentation"},"Serenity BDD CLI")," to produce HTML reports and living documentation,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/photographer"},"Photographer")," - automatically captures screenshots of the web browser window used by the active actor, to be archived via ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/artifact-archiver"},(0,a.yg)("inlineCode",{parentName:"a"},"ArtifactArchiver"))," and attached to ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reports")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/artifact-archiver"},"Artifact Archiver")," - stores report artifacts on disk,"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/stream-reporter"},"Stream Reporter")," - logs any events it receives to help you with debugging.")),(0,a.yg)("p",null,"You might want to study the above examples to create your own ",(0,a.yg)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},(0,a.yg)("inlineCode",{parentName:"a"},"StageCrewMembers"))," to produce custom reports or send the results to external reporting or storage systems."))}m.isMDXComponent=!0}}]);