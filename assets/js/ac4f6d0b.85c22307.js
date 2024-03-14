"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[4133],{82247:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),y=l(r),h=n,u=y["".concat(p,".").concat(h)]||y[h]||m[h]||i;return r?a.createElement(u,o(o({ref:t},g),{},{components:r})):a.createElement(u,o({ref:t},g))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},70124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(89575),n=(r(14041),r(82247));const i={sidebar_position:2,title:"Serenity/JS Project Templates"},o="Serenity/JS Project Templates",s={unversionedId:"getting-started/project-templates",id:"getting-started/project-templates",title:"Serenity/JS Project Templates",description:"Serenity/JS Project Templates are boilerplate repositories that combine the most popular configurations",source:"@site/docs/getting-started/project-templates.mdx",sourceDirName:"getting-started",slug:"/getting-started/project-templates",permalink:"/handbook/getting-started/project-templates",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/getting-started/project-templates.mdx",tags:[],version:"current",lastUpdatedBy:"Jan Molak",lastUpdatedAt:1710354606,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Serenity/JS Project Templates"},sidebar:"docs",previous:{title:"Getting started",permalink:"/handbook/getting-started/"},next:{title:"Installing Serenity/JS",permalink:"/handbook/getting-started/installation"}},p={},l=[{value:"Using Serenity/JS Project Templates",id:"using-serenityjs-project-templates",level:2},{value:"Serenity/JS Gitpods",id:"serenityjs-gitpods",level:3},{value:"Web Testing",id:"web-testing",level:2},{value:"WebdriverIO",id:"webdriverio",level:3},{value:"Playwright",id:"playwright",level:3},{value:"Protractor",id:"protractor",level:3},{value:"Web Component Testing",id:"web-component-testing",level:2},{value:"REST/HTTP API Testing",id:"resthttp-api-testing",level:2},{value:"Your feedback matters!",id:"your-feedback-matters",level:2}],g={toc:l},y="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"serenityjs-project-templates"},"Serenity/JS Project Templates"),(0,n.yg)("p",null,"Serenity/JS Project Templates are ",(0,n.yg)("strong",{parentName:"p"},"boilerplate repositories")," that combine the most popular configurations\nof Serenity/JS modules, integration, and test tools, and include a handful of test scenarios to help you get started."),(0,n.yg)("p",null,"You can find all the official ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=template&type=all&language=&sort="},"Serenity/JS Project Templates on GitHub"),",\ncomplete with ",(0,n.yg)("strong",{parentName:"p"},"GitHub Actions")," configuration, ",(0,n.yg)("strong",{parentName:"p"},"VisualStudio Code")," settings, and set up to publish test reports to ",(0,n.yg)("strong",{parentName:"p"},"GitHub Pages")," \ud83d\udcaa\ud83d\udcaa\ud83d\udcaa"),(0,n.yg)("admonition",{title:"Short on time? \u23f1\ufe0f",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"To quickly see what Serenity/JS is capable of, go straight to the first tutorial where you'll learn\nhow to use Serenity/JS and Playwright Test to ",(0,n.yg)("a",{parentName:"p",href:"/handbook/web-testing/your-first-web-scenario/"},"write test scenarios for web applications"),".")),(0,n.yg)("h2",{id:"using-serenityjs-project-templates"},"Using Serenity/JS Project Templates"),(0,n.yg)("p",null,"You can clone a ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=template&type=all&language=&sort="},"Serenity/JS Project Template repository")," to your machine,\nuse it to ",(0,n.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template"},"create new GitHub repositories"),",\nor instantly try it out it in your browser using its associated ",(0,n.yg)("a",{parentName:"p",href:"#serenityjs-gitpods"},"Serenity/JS Gitpod"),"!"),(0,n.yg)("h3",{id:"serenityjs-gitpods"},"Serenity/JS Gitpods"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Serenity/JS Gitpods")," are ",(0,n.yg)("strong",{parentName:"p"},"free virtual workspaces")," you can launch on demand on ",(0,n.yg)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod.io"),".\nThey are the easiest way to get started with the framework, as every Serenity/JS Project Template\ncomes with a Serenity/JS Gitpod that has all the ",(0,n.yg)("strong",{parentName:"p"},"browsers"),", ",(0,n.yg)("strong",{parentName:"p"},"test tools"),", ",(0,n.yg)("strong",{parentName:"p"},"drivers"),", ",(0,n.yg)("strong",{parentName:"p"},"libraries")," and even ",(0,n.yg)("strong",{parentName:"p"},"VisualStudio Code plugins")," already installed and ready to go."),(0,n.yg)("p",null,"To use Serenity/JS Gitpods you'll need a ",(0,n.yg)("a",{parentName:"p",href:"#your-githubcom-account"},"free account on GitHub.com"),".\nYou can then use your GitHub account to sign up for a ",(0,n.yg)("a",{parentName:"p",href:"https://www.gitpod.io/"},"free account on Gitpod.io")," the first time you launch your workspace."),(0,n.yg)("h2",{id:"web-testing"},"Web Testing"),(0,n.yg)("p",null,"Serenity/JS seamlessly integrates with well-known web testing tools and frameworks.\nThe ",(0,n.yg)("a",{parentName:"p",href:"/handbook/web-testing/"},"universal Serenity/JS web testing fa\xe7ade")," ensures consistent functionality regardless of the chosen integration tool."),(0,n.yg)("p",null,"However, different web integration tools offer some unique features that could be beneficial for your project.\nThe list below highlights some of these extra benefits. Don't fret though!\nWith Serenity/JS, you have the flexibility to ",(0,n.yg)("strong",{parentName:"p"},"switch between tools")," if your situation demands it later on."),(0,n.yg)("h3",{id:"webdriverio"},"WebdriverIO"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," is a progressive automation framework built to automate modern ",(0,n.yg)("strong",{parentName:"p"},"web")," and ",(0,n.yg)("strong",{parentName:"p"},"mobile")," applications."),(0,n.yg)("p",null,"You can use Serenity/JS with WebdriverIO to:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"automate testing of ",(0,n.yg)("strong",{parentName:"li"},"web applications")," written in React, Vue, Angular, Svelte, or other frontend frameworks"),(0,n.yg)("li",{parentName:"ul"},"automate testing of ",(0,n.yg)("strong",{parentName:"li"},"hybrid")," or ",(0,n.yg)("strong",{parentName:"li"},"native mobile")," applications running in an emulator/simulator, or on a real device"),(0,n.yg)("li",{parentName:"ul"},"enable ",(0,n.yg)("strong",{parentName:"li"},"cross-browser testing"),", ",(0,n.yg)("strong",{parentName:"li"},"legacy browser testing"),", and testing using an in-house or vendor-provided ",(0,n.yg)("strong",{parentName:"li"},"Selenium Grid"))),(0,n.yg)("p",null,"To use Serenity/JS with WebdriverIO, start with one of the below templates:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Project Template"),(0,n.yg)("th",{parentName:"tr",align:null},"Features"),(0,n.yg)("th",{parentName:"tr",align:null},"Get Started"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template"},"Serenity/JS with Cucumber.js and WebdriverIO")),(0,n.yg)("td",{parentName:"tr",align:null},"Cucumber.js; WebdriverIO; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-cucumber-webdriverio-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template"},"Serenity/JS with Jasmine and WebdriverIO")),(0,n.yg)("td",{parentName:"tr",align:null},"Jasmine; WebdriverIO; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-jasmine-webdriverio-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template"},"Serenity/JS with Mocha and WebdriverIO")),(0,n.yg)("td",{parentName:"tr",align:null},"Mocha; WebdriverIO; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-mocha-webdriverio-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-mocha-webdriverio-template"},"Start","\xa0","GitPod","\xa0","workspace"))))),(0,n.yg)("h3",{id:"playwright"},"Playwright"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," is a modern web integration tool for testing ",(0,n.yg)("strong",{parentName:"p"},"websites"),", ",(0,n.yg)("strong",{parentName:"p"},"web applications"),", and ",(0,n.yg)("strong",{parentName:"p"},"web components"),"."),(0,n.yg)("p",null,"Playwright supports the latest rendering engines including Chromium, WebKit, and Firefox,\noffers an excellent dedicated test runner - Playwright Test, and boasts an outstanding tooling support\nfrom both ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/getting-started-vscode"},"VisualStudio Code"),"\nand ",(0,n.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/aqua/"},"JetBrains AQUA"),"."),(0,n.yg)("p",null,"You can use Serenity/JS with Playwright to:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"automate testing of ",(0,n.yg)("strong",{parentName:"li"},"web applications")," written in Angular, React, Solid, Svelte, Vue, or other frontend frameworks"),(0,n.yg)("li",{parentName:"ul"},"automate testing of ",(0,n.yg)("strong",{parentName:"li"},"web components")," written in React, Svelte, Vue and Solid"),(0,n.yg)("li",{parentName:"ul"},"enable ",(0,n.yg)("strong",{parentName:"li"},"cross-browser engine testing"))),(0,n.yg)("p",null,"To use Serenity/JS with Playwright, start with one of the below templates:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Project Template"),(0,n.yg)("th",{parentName:"tr",align:null},"Features"),(0,n.yg)("th",{parentName:"tr",align:null},"Get Started"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-test-template"},"Serenity/JS with Playwright Test")),(0,n.yg)("td",{parentName:"tr",align:null},"Serenity/JS with ",(0,n.yg)("strong",{parentName:"td"},"Playwright")," and ",(0,n.yg)("strong",{parentName:"td"},"Playwright Test")," runner, universal web testing template, ",(0,n.yg)("strong",{parentName:"td"},"recommended for most projects"),(0,n.yg)("br",null),(0,n.yg)("br",null),"Playwright Test; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome, Firefox, and Webkit browser engines; Playwright Test reports; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-test-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-test-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-playwright-test-template/serenity"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-playwright-test-template/playwright"},"View","\xa0","Playwright","\xa0","Test","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-playwright-test-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-playwright-template"},"Serenity/JS with Cucumber and Playwright")),(0,n.yg)("td",{parentName:"tr",align:null},"Serenity/JS with ",(0,n.yg)("strong",{parentName:"td"},"Playwright")," and ",(0,n.yg)("strong",{parentName:"td"},"Cucumber.js")," test runner, great for BDD projects that rely on Cucumber to define executable specifications",(0,n.yg)("br",null),(0,n.yg)("br",null),"Cucumber, Playwright, TypeScript, Gitpod workspace, GitHub Actions, Local Chrome browser engine, Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-playwright-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-playwright-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-cucumber-playwright-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-playwright-test-template/playwright"},"View","\xa0","Playwright","\xa0","Test","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-cucumber-playwright-template"},"Start","\xa0","GitPod","\xa0","workspace"))))),(0,n.yg)("h3",{id:"protractor"},"Protractor"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://angular.github.io/protractor"},"Protractor")," is an end-to-end web testing framework for ",(0,n.yg)("a",{parentName:"p",href:"http://angular.io/"},"Angular")," and ",(0,n.yg)("a",{parentName:"p",href:"http://angularjs.org"},"AngularJS")," applications."),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"As Protractor ",(0,n.yg)("a",{parentName:"p",href:"https://www.protractortest.org/#/project-status"},"reaches its end of life"),",\nSerenity/JS + Protractor project templates should be used mainly as a reference implementation\nto ",(0,n.yg)("a",{parentName:"p",href:"/handbook/getting-started/serenity-js-with-protractor/"},"migrate existing Protractor projects to Serenity/JS"),",\nand from there to a modern web testing framework like Playwright or WebdriverIO.")),(0,n.yg)("p",null,"To use Serenity/JS with Protractor, start with one of the below templates:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Project Template"),(0,n.yg)("th",{parentName:"tr",align:null},"Features"),(0,n.yg)("th",{parentName:"tr",align:null},"Get Started"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-protractor-template"},"Serenity/JS with Cucumber and Protractor")),(0,n.yg)("td",{parentName:"tr",align:null},"Cucumber.js; Protractor; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-protractor-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-protractor-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-cucumber-protractor-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-cucumber-protractor-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-protractor-template"},"Serenity/JS with Jasmine and Protractor")),(0,n.yg)("td",{parentName:"tr",align:null},"Jasmine; Protractor; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-protractor-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-jasmine-protractor-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-jasmine-protractor-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-jasmine-protractor-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-protractor-template"},"Serenity/JS with Mocha and Protractor")),(0,n.yg)("td",{parentName:"tr",align:null},"Mocha; Protractor; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome browser; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-protractor-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-protractor-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-mocha-protractor-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-mocha-protractor-template"},"Start","\xa0","GitPod","\xa0","workspace"))))),(0,n.yg)("h2",{id:"web-component-testing"},"Web Component Testing"),(0,n.yg)("p",null,"Serenity/JS integrates with ",(0,n.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/test-components"},"Playwright Component Test")," runner,\nallowing to test React, Svelte, Vue and Solid components."),(0,n.yg)("p",null,"To use Serenity/JS with Playwright Component Test runner, start with one of the below templates:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Project Template"),(0,n.yg)("th",{parentName:"tr",align:null},"Features"),(0,n.yg)("th",{parentName:"tr",align:null},"Get Started"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-ct-react-template"},"Serenity/JS with Playwright Component Test runner for React")),(0,n.yg)("td",{parentName:"tr",align:null},"Playwright Component Testing; TypeScript; Gitpod workspace; GitHub Actions; Local Chrome, Firefox, and Webkit browser engines; Playwright Test reports; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-ct-react-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-playwright-ct-react-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-playwright-ct-react-template/serenity/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null),(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-playwright-ct-react-template/playwright"},"View","\xa0","Playwright","\xa0","Test","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-playwright-ct-react-template"},"Start","\xa0","GitPod","\xa0","workspace"))))),(0,n.yg)("h2",{id:"resthttp-api-testing"},"REST/HTTP API Testing"),(0,n.yg)("p",null,"Serenity/JS dedicated ",(0,n.yg)("a",{parentName:"p",href:"/api/rest"},"REST API testing module"),",\nallows you to interact with REST and HTTP-based web services either as part of web or API test scenarios."),(0,n.yg)("p",null,"To use Serenity/JS to interact with REST and HTTP-based web services, start with one of the below templates:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Project Template"),(0,n.yg)("th",{parentName:"tr",align:null},"Features"),(0,n.yg)("th",{parentName:"tr",align:null},"Get Started"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-template"},"Serenity/JS with Cucumber")),(0,n.yg)("td",{parentName:"tr",align:null},"REST API testing setup; Cucumber.js; TypeScript; Gitpod workspace; GitHub Actions; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-cucumber-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-cucumber-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-cucumber-template"},"Start","\xa0","GitPod","\xa0","workspace"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-template"},"Serenity/JS with Mocha")),(0,n.yg)("td",{parentName:"tr",align:null},"REST API testing setup; Mocha; TypeScript; Gitpod workspace; GitHub Actions; Serenity BDD reports"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-template/generate"},"Generate","\xa0","new","\xa0","project")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/serenity-js/serenity-js-mocha-template"},"View","\xa0","Code")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://serenity-js.github.io/serenity-js-mocha-template/"},"View","\xa0","Serenity","\xa0","BDD","\xa0","Reports")," ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://gitpod.io/#https://github.com/serenity-js/serenity-js-mocha-template"},"Start","\xa0","GitPod","\xa0","workspace"))))),(0,n.yg)("h2",{id:"your-feedback-matters"},"Your feedback matters!"),(0,n.yg)("p",null,"If you like Serenity/JS, ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"give it a \u2b50 star on GitHub")," and tell your friends about it!\nFor questions about Serenity/JS, check out ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Q'n'A"),",\nand make sure to join our ",(0,n.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to say hi \ud83d\udc4b"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js",alt:"GitHub stars"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Serenity%2FJS-Q'n'A-FBD30B?logo=github",alt:"Join Serenity/JS Community Chat"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"}))),(0,n.yg)("p",null,"New tutorials and videos are coming soon, follow us on ",(0,n.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"LinkedIn")," and subscribe to ",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC0RdeVPyjtJopVHvlLrXd1Q"},"Serenity/JS YouTube channel")," to get notified when they're available!"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",alt:"LinkedIn Follow"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch%20@serenity--js-E62117?style=for-the-badge&logo=youtube&logoColor=white",alt:"YouTube Follow"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))),(0,n.yg)("admonition",{title:"Need another template?",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"More templates are coming soon! Let me know what you need in the comments \ud83d\udc47\ud83d\udc47\ud83d\udc47")))}m.isMDXComponent=!0}}]);