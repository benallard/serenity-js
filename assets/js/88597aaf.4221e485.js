"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[6148],{82247:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(14041);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,g=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},71949:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(14041),a=t(9546);const i={tabItem:"tabItem_OMyP"};function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:t},r)}},399:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(89575),a=t(14041),i=t(9546),o=t(91963),s=t(33480),l=t(29776);const p={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function u(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),y=e=>{const r=e.currentTarget,t=c.indexOf(r),n=u[t].value;n!==s&&(d(r),l(n))},g=e=>{let r=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},r)},u.map((e=>{let{value:r,label:t,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,key:r,ref:e=>c.push(e),onKeyDown:g,onClick:y},o,{className:(0,i.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":s===r})}),t??r)})))}function c(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function d(e){const r=(0,s.u)(e);return a.createElement("div",{className:(0,i.A)("tabs-container",p.tabList)},a.createElement(u,(0,n.A)({},e,r)),a.createElement(c,(0,n.A)({},e,r)))}function y(e){const r=(0,l.A)();return a.createElement(d,(0,n.A)({key:String(r)},e))}},33480:(e,r,t)=>{t.d(r,{u:()=>d});var n=t(14041),a=t(86090),i=t(25260),o=t(99925),s=t(30559);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??l(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function c(e){let{queryString:r=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function d(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,i=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[d,y]=c({queryString:t,groupId:a}),[g,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,i]=(0,s.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=d??g;return u({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),y(e),m(e)}),[y,m,i]),tabValues:i}}},73861:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(89575),a=(t(14041),t(82247)),i=t(399),o=t(71949);const s={sidebar_position:6},l="WebdriverIO",p={unversionedId:"test-runners/webdriverio",id:"test-runners/webdriverio",title:"WebdriverIO",description:"WebdriverIO is a progressive automation framework built to automate modern web and mobile applications.",source:"@site/docs/test-runners/webdriverio.mdx",sourceDirName:"test-runners",slug:"/test-runners/webdriverio",permalink:"/handbook/test-runners/webdriverio",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/webdriverio.mdx",tags:[],version:"current",lastUpdatedBy:"Jan Molak",lastUpdatedAt:1710354606,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Protractor",permalink:"/handbook/test-runners/protractor"},next:{title:"Reporting",permalink:"/handbook/reporting/"}},u={},c=[{value:"Creating a new  project",id:"creating-a-new--project",level:2},{value:"Using the WebdriverIO wizard",id:"using-the-webdriverio-wizard",level:3},{value:"Using Serenity/JS Project Templates",id:"using-serenityjs-project-templates",level:3},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring WebdriverIO",id:"configuring-webdriverio",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3}],d={toc:c},y="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(y,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"webdriverio"},"WebdriverIO"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," is a progressive automation framework built to automate modern web and mobile applications.\nWebdriverIO leverages the power of the ",(0,a.yg)("a",{parentName:"p",href:"https://w3c.github.io/webdriver/"},"WebDriver")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/w3c/webdriver-bidi"},"WebDriver-BiDi")," protocols that are developed and supported\nby all browser vendors and guarantees a true cross-browser testing experience.\nFurthermore, WebdriverIO also supports alternative, proprietary automation protocols like ",(0,a.yg)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome DevTools")," via ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer"},"Puppeteer"),"."),(0,a.yg)("admonition",{title:"Extending existing WebdriverIO Test suites",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you want to add Serenity/JS to an existing WebdriverIO test suite, check out\n",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/serenity-js-with-webdriverio/"},"Extending WebdriverIO with Serenity/JS"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"In this article, you will learn:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"How to create a new Serenity/JS + WebdriverIO project"),(0,a.yg)("li",{parentName:"ul"},"How to use ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.yg)("li",{parentName:"ul"},"How to implement WebdriverIO test scenarios using reusable ",(0,a.yg)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs and the ",(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},"Serenity/JS WebdriverIO module"))),(0,a.yg)("h2",{id:"creating-a-new--project"},"Creating a new  project"),(0,a.yg)("p",null,"The easiest way to create a new Serenity/JS and WebdriverIO project is to use the WebdriverIO configuration wizard,\nor clone one of the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/project-templates/#webdriverio"},"Serenity/JS + WebdriverIO project templates"),"."),(0,a.yg)("h3",{id:"using-the-webdriverio-wizard"},"Using the WebdriverIO wizard"),(0,a.yg)("p",null,"To use the WebdriverIO configuration wizard, run the following command in your computer terminal:"),(0,a.yg)(i.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm init wdio\n"))),(0,a.yg)(o.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn create wdio\n")))),(0,a.yg)("p",null,"Next, select the following options:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Type of testing: ",(0,a.yg)("strong",{parentName:"li"},"E2E Testing")),(0,a.yg)("li",{parentName:"ul"},"Automation backend: ",(0,a.yg)("strong",{parentName:"li"},"any"),", as Serenity/JS supports both local and remote WebdriverIO test runners"),(0,a.yg)("li",{parentName:"ul"},"Environment: ",(0,a.yg)("strong",{parentName:"li"},"web")),(0,a.yg)("li",{parentName:"ul"},"Browser: ",(0,a.yg)("strong",{parentName:"li"},"any"),", as Serenity/JS supports all browsers supported by WebdriverIO"),(0,a.yg)("li",{parentName:"ul"},"Framework: ",(0,a.yg)("strong",{parentName:"li"},"Jasmine with Serenity/JS"),", ",(0,a.yg)("strong",{parentName:"li"},"Mocha with Serenity/JS"),", or ",(0,a.yg)("strong",{parentName:"li"},"Cucumber with Serenity/JS")),(0,a.yg)("li",{parentName:"ul"},"Compiler: ",(0,a.yg)("strong",{parentName:"li"},"any"),", as Serenity/JS supports both TypeScript and JavaScript (we recommend TypeScript)"),(0,a.yg)("li",{parentName:"ul"},"Generate test files: ",(0,a.yg)("strong",{parentName:"li"},"yes"),", if you'd like Serenity/JS to give you a starting point for your test scenarios"),(0,a.yg)("li",{parentName:"ul"},"Test file location: ",(0,a.yg)("strong",{parentName:"li"},"accept the defaults"),", unless you'd like to store your code in a different directory"),(0,a.yg)("li",{parentName:"ul"},"Test reporter: ",(0,a.yg)("strong",{parentName:"li"},"any"),", Serenity/JS configures the project to use ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", and you can add native WebdriverIO reporters too if needed")),(0,a.yg)("p",null,"Check out the below video to see how to create a new project step by step:"),(0,a.yg)("figure",null,(0,a.yg)("iframe",{width:"100%",height:"494",src:"https://www.youtube.com/embed/8mMY6Of4nCw?si=iMT8jiH3xA9lWl0v",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),(0,a.yg)("figcaption",null,"Generating a new Serenity/JS project using the WebdriverIO configuration wizard")),(0,a.yg)("h3",{id:"using-serenityjs-project-templates"},"Using Serenity/JS Project Templates"),(0,a.yg)("p",null,"If you'd like to dive straight into the code, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/getting-started/project-templates/#webdriverio"},"Serenity/JS + WebdriverIO project templates"),", which are the easiest way to start with the framework,"),(0,a.yg)("li",{parentName:"ul"},"several ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"reference implementations"),", demonstrating using Serenity/JS with WebdriverIO to write web-based acceptance tests")),(0,a.yg)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")," module")," provides a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.yg)("strong",{parentName:"a"},"test runner adapter")),"\nyou can attach to your ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/testrunner"},"WebdriverIO test runner"),"\njust like any other standard ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile"},"WebdriverIO ",(0,a.yg)("inlineCode",{parentName:"a"},"framework")),"."),(0,a.yg)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.yg)("p",null,"To use ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a WebdriverIO Test project, you need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"attach the ",(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))," test runner adapter to the WebdriverIO test runner"),(0,a.yg)("li",{parentName:"ul"},"use ",(0,a.yg)("inlineCode",{parentName:"li"},"wdio.conf.ts")," to ",(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio/interface/WebdriverIOConfig"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"SerenityBDDReporter")))),(0,a.yg)("figure",null,(0,a.yg)("mermaid",{value:'graph TB\n    SUT(["Web App"])\n    DEV(["\ud83d\udcbb Developer"])\n    WdioCli["wdio"]\n    Wdio(["WebdriverIO"])\n    ConfigFile["wdio.conf.ts"]\n    SWdioAdapter(["@serenity-js/webdriverio/adapter"])\n    SWeb(["@serenity-js/web"])\n    SWdio(["@serenity-js/webdriverio"])\n    SCore(["@serenity-js/core"])\n    TR(["3rd-party test runner"])\n    TRA(["Serenity/JS test runner adapter"])\n    Specs["test scenarios"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e WdioCli\n    WdioCli -- loads --\x3e ConfigFile\n    WdioCli -- uses --\x3e SWdioAdapter\n    ConfigFile -- configures --\x3e SCore\n    SWdioAdapter -- registers --\x3e TRA\n    SWdioAdapter -- manages --\x3e TR\n    TR -- notifies --\x3e TRA\n    TR -- executes --\x3e Specs\n    Specs -- use --\x3e SWeb\n    SWeb -- notifies --\x3e SCore\n\n    SWeb -- uses --\x3e SWdio\n\n    SWdio -- uses --\x3e Wdio\n\n    Wdio -- interacts with --\x3e SUT\n\n    TRA -- notifies --\x3e SCore\n    SCore -- notifies --\x3e R\n\n    click SWdio "/api/webdriverio"\n    click SWeb "/api/web"\n    click SCore "/api/core"\n    click R "/handbook/reporting"'}),(0,a.yg)("figcaption",null,"Serenity/JS + WebdriverIO integration architecture")),(0,a.yg)("h3",{id:"installing-serenityjs-test-runner-adapter"},"Installing Serenity/JS test runner adapter"),(0,a.yg)("p",null,"Follow ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"WebdriverIO installation instructions"),"\nto create a new WebdriverIO project."),(0,a.yg)("admonition",{title:"Use TypeScript to get the most out of your development tools",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"WebdriverIO installation wizard will ask you whether you want to use TypeScript or JavaScript\nto implement your test scenarios.\nChoosing TypeScript offers improved tooling support in IDEs such\nas ",(0,a.yg)("a",{parentName:"p",href:"/handbook/integration/jetbrains-idea"},"JetBrains")," and ",(0,a.yg)("a",{parentName:"p",href:"/handbook/integration/visual-studio-code"},"Visual Studio Code"),".")),(0,a.yg)("p",null,"Next, add Serenity/JS WebdriverIO and web integration modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/web"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,a.yg)("p",null,"You might also want to install Serenity/JS reporting services:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/console-reporter"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,a.yg)("p",null,"To do the above, run the following command in your terminal:"),(0,a.yg)(i.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n"))),(0,a.yg)(o.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n")))),(0,a.yg)("p",null,"WebdriverIO offers a ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/runner#local-runner"},"local runner")," that\nuses Jasmine, Mocha, or Cucumber to run your test scenarios.\nSince the task of running the scenarios is delegated to another tool,\nyou'll need to follow the installation instructions to add a Serenity/JS test runner adapter for the runner you've decided to use."),(0,a.yg)("p",null,"See Serenity/JS test runner adapter installation instructions for:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/cucumber#installing-serenityjs-test-runner-adapter"},"Cucumber")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/jasmine#installing-serenityjs-test-runner-adapter"},"Jasmine")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/mocha#installing-serenityjs-test-runner-adapter"},"Mocha"))),(0,a.yg)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.yg)("p",null,"To use ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a WebdriverIO project,\nmodify your ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile/"},(0,a.yg)("inlineCode",{parentName:"a"},"wdio.conf.ts")," configuration file"),"\nto register ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO adapter")," as a ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/frameworks"},"WebdriverIO ",(0,a.yg)("inlineCode",{parentName:"a"},"framework")),"\nand list any ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting"},"Serenity/JS reporting services")," under ",(0,a.yg)("inlineCode",{parentName:"p"},"crew"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"import { WebdriverIOConfig } from '@serenity-js/webdriverio';\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n")),(0,a.yg)("p",null,"Learn more about configuring ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO adapter")," and ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),"."),(0,a.yg)("h3",{id:"configuring-webdriverio"},"Configuring WebdriverIO"),(0,a.yg)("p",null,"WebdriverIO relies on Cucumber, Jasmine, or Mocha to execute your test scenarios.\nHowever, it is responsible for configuring the test runners themselves.\nTo learn about the test runner configuration options, follow the ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio#configuring-webdriverio"},"Serenity/JS WebdriverIO configuration guide"),"."),(0,a.yg)("p",null,"To find out how to define test scenarios, check out the respective guide on using Serenity/JS with:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/cucumber"},"Cucumber")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/jasmine"},"Jasmine")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/mocha"},"Mocha"))),(0,a.yg)("p",null,"To learn about other WebdriverIO configuration options, consult the ",(0,a.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/configuration"},"WebdriverIO documentation"),"."),(0,a.yg)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," works great with WebdriverIO\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nWebdriverIO test scenarios that are easy to read and understand."),(0,a.yg)("p",null,"The fastest way to get started with Serenity/JS and WebdriverIO is to use one of\nthe ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=webdriverio+template&type=all&language=&sort="},"Serenity/JS + WebdriverIO project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.yg)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.yg)("p",null,"When you configure ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO"),"\nas the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio#configuring-serenityjs"},"WebdriverIO ",(0,a.yg)("inlineCode",{parentName:"a"},"framework")),",\nSerenity/JS automatically creates and makes available a default ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors"),"\nwhere every actor has the abilities to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO"},(0,a.yg)("inlineCode",{parentName:"a"},"BrowseTheWebWithWebdriverIO"))," using the global ",(0,a.yg)("inlineCode",{parentName:"li"},"browser")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core/class/TakeNotes"},(0,a.yg)("inlineCode",{parentName:"a"},"TakeNotes.usingAnEmptyNotepad()")))),(0,a.yg)("p",null,"This means that any actors you refer to in your test scenarios using\n",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorCalled"},(0,a.yg)("inlineCode",{parentName:"a"},"actorCalled")),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorInTheSpotlight"},(0,a.yg)("inlineCode",{parentName:"a"},"actorInTheSpotlight"))," functions are configured using\nthis default cast, and already have access to the WebdriverIO-managed browser instance."),(0,a.yg)("p",null,"Since WebdriverIO uses Jasmine, Mocha, or Cucumber to run your test scenarios, please refer to their\ndedicated guides to learn more about using Serenity/JS actors with:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/cucumber#referring-to-actors-in-test-scenarios"},"Cucumber")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/jasmine#referring-to-actors-in-test-scenarios"},"Jasmine")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/handbook/test-runners/mocha#referring-to-actors-in-test-scenarios"},"Mocha"))),(0,a.yg)("h3",{id:"configuring-a-custom-cast-of-actors"},"Configuring a custom cast of actors"),(0,a.yg)("p",null,"You can replace the default ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors"),"\nby providing a custom implementation via ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio/interface/WebdriverIOConfig#serenity"},(0,a.yg)("inlineCode",{parentName:"a"},"serenity.actors")),"\nconfiguration option in your ",(0,a.yg)("inlineCode",{parentName:"p"},"wdio.conf.ts"),"."),(0,a.yg)("p",null,"For example, to implement a cast where every actor can ",(0,a.yg)("a",{parentName:"p",href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO"},(0,a.yg)("inlineCode",{parentName:"a"},"BrowseTheWebWithWebdriverIO")),",\n",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/TakeNotes"},(0,a.yg)("inlineCode",{parentName:"a"},"TakeNotes"))," and ",(0,a.yg)("a",{parentName:"p",href:"/api/rest/class/CallAnApi"},(0,a.yg)("inlineCode",{parentName:"a"},"CallAnApi")),", you could create a ",(0,a.yg)("inlineCode",{parentName:"p"},"MyActors")," class like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/MyActors.ts"',title:'"test/MyActors.ts"'},"import { Actor, Cast, TakeNotes } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\nimport { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'\n\nexport class MyActors implements Cast {\n    // use constructor parameters to pass properties from the configuration file\n    constructor(private readonly apiUrl: string) {\n    }\n\n    prepare(actor: Actor): Actor {\n        return actor.whoCan(\n            BrowseTheWebWithWebdriverIO.using(browser), // use global browser object\n            TakeNotes.usingAnEmptyNotepad(),\n            CallAnApi.at(this.apiUrl),\n        );\n    }\n}\n")),(0,a.yg)("admonition",{title:"No browser in the configuration file",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"WebdriverIO doesn't allow you to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"browser")," global variable in ",(0,a.yg)("inlineCode",{parentName:"p"},"wdio.conf.ts"),".\nThat's why you need to create a custom implementation of ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},(0,a.yg)("inlineCode",{parentName:"a"},"Cast")),"\nand only refer to ",(0,a.yg)("inlineCode",{parentName:"p"},"browser")," in ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast#prepare"},(0,a.yg)("inlineCode",{parentName:"a"},"Cast.prepare"))," method.")),(0,a.yg)("p",null,"Next, modify your WebdriverIO configuration file to provide your custom ",(0,a.yg)("inlineCode",{parentName:"p"},"MyActors")," implementation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"import { WebdriverIOConfig } from '@serenity-js/webdriverio'\n// highlight-next-line\nimport { MyActors } from './test/MyActors'\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        // highlight-next-line\n        actors: new MyActors('https://api.example.org'),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n")))}g.isMDXComponent=!0}}]);