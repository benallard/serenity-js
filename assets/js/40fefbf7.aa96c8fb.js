"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[7925],{82247:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(14041);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(89575),o=(n(14041),n(82247)),r=n(399),i=n(71949);const s={title:"Commit message conventions",sidebar_position:5},l="Commit message conventions",u={unversionedId:"contributing/commit-message-conventions",id:"contributing/commit-message-conventions",title:"Commit message conventions",description:"Serenity/JS Continuous Delivery Pipeline uses Conventional Commits standard and analyses the files you've modified to determine if the changes you propose require version bump and a release.",source:"@site/community/contributing/commit-message-conventions.mdx",sourceDirName:"contributing",slug:"/contributing/commit-message-conventions",permalink:"/community/contributing/commit-message-conventions",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/community/contributing/commit-message-conventions.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Commit message conventions",sidebar_position:5},sidebar:"community",previous:{title:"Proposing enhancements",permalink:"/community/contributing/proposing-enhancements"}},c={},m=[{value:"Handling Pull Requests that trigger a release",id:"handling-pull-requests-that-trigger-a-release",level:2},{value:"Squashing Pull Requests",id:"squashing-pull-requests",level:3},{value:"Commit message wizard",id:"commit-message-wizard",level:2}],p={toc:m},g="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"commit-message-conventions"},"Commit message conventions"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/blob/main/.github/workflows/main.yaml"},"Serenity/JS Continuous Delivery Pipeline")," uses ",(0,o.yg)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," standard and analyses the files you've modified to determine if the changes you propose ",(0,o.yg)("strong",{parentName:"p"},"require version bump and a release"),"."),(0,o.yg)("p",null,"For example, changes to ",(0,o.yg)("strong",{parentName:"p"},"any files")," in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/packages"},(0,o.yg)("inlineCode",{parentName:"a"},"packages"))," directory\nwill result in a release of the new version of Serenity/JS to ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/org/serenity-js"},"npmjs.com")," and the ",(0,o.yg)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS website")," being updated,\nwhile changes to ",(0,o.yg)("strong",{parentName:"p"},"any files")," in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/documentation"},(0,o.yg)("inlineCode",{parentName:"a"},"documentation"))," will only result in the website being updated."),(0,o.yg)("p",null,"Additionally, if your changes are marked as ",(0,o.yg)("inlineCode",{parentName:"p"},"feat")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"fix"),", they will be included in the ",(0,o.yg)("a",{parentName:"p",href:"/changelog/"},"changelog and release notes"),". For example:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"docs(website): corrected a typo in the handbook")," will not be included in the changelog"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"feat(console-reporter): improved stats aggregation")," will be included in the changelog")),(0,o.yg)("admonition",{title:"Your commit messages matter",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Please pay attention to what you write in your commit messages, as messages marked as ",(0,o.yg)("inlineCode",{parentName:"p"},"feat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"fix")," are included in the ",(0,o.yg)("a",{parentName:"p",href:"/changelog/"},"changelog and release notes"),".")),(0,o.yg)("h2",{id:"handling-pull-requests-that-trigger-a-release"},"Handling Pull Requests that trigger a release"),(0,o.yg)("p",null,"When you raise a Pull Request, the Serenity/JS pipeline will automatically calculate the version number based on the commit messages and the files you've modified, according to the following rules:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"if your Pull Request contains a single commit with a ",(0,o.yg)("inlineCode",{parentName:"li"},"fix")," message, e.g. ",(0,o.yg)("inlineCode",{parentName:"li"},"fix(core): corrected a typo in the API docs"),", the pipeline will bump the ",(0,o.yg)("strong",{parentName:"li"},"patch")," version of the affected module, e.g. ",(0,o.yg)("inlineCode",{parentName:"li"},"@serenity-js/core"),", and other Serenity/JS modules that rely on it and release them together to npmjs.com."),(0,o.yg)("li",{parentName:"ul"},"if your Pull Request contains a commit with a ",(0,o.yg)("inlineCode",{parentName:"li"},"feat")," message, the pipeline will bump the ",(0,o.yg)("strong",{parentName:"li"},"minor")," version"),(0,o.yg)("li",{parentName:"ul"},"if your Pull Request contains multiple commits, some of which are ",(0,o.yg)("inlineCode",{parentName:"li"},"fix"),", some ",(0,o.yg)("inlineCode",{parentName:"li"},"feat"),", some ",(0,o.yg)("inlineCode",{parentName:"li"},"style"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"refactor")," or ",(0,o.yg)("inlineCode",{parentName:"li"},"docs"),", the pipeline will determine the most significant change and bump the ",(0,o.yg)("strong",{parentName:"li"},"minor")," version if there's at least one ",(0,o.yg)("inlineCode",{parentName:"li"},"feat")," commit, or the ",(0,o.yg)("strong",{parentName:"li"},"patch")," version if there are only ",(0,o.yg)("inlineCode",{parentName:"li"},"fix")," commits.")),(0,o.yg)("admonition",{title:"Serenity/JS Continuous Delivery Pipeline",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The Serenity/JS pipeline runs ",(0,o.yg)("strong",{parentName:"p"},"thousands of package- and integration-level tests")," across a number of supported Node.js runtimes, browsers,\nand operating systems to help make sure new changes don't introduce regressions and takes only about 15 minutes to complete \ud83d\ude80")),(0,o.yg)("h3",{id:"squashing-pull-requests"},"Squashing Pull Requests"),(0,o.yg)("p",null,"If your Pull Requests contains ",(0,o.yg)("strong",{parentName:"p"},"multiple commits")," affecting the same feature, it's fine to have the various commits follow the ",(0,o.yg)("inlineCode",{parentName:"p"},"feat(scope): description")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"fix(scope): description")," format, as the pipeline will still calculate the version number based on the most significant change\nwhile including all ",(0,o.yg)("inlineCode",{parentName:"p"},"feat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"fix")," commits in the changelog and release notes."),(0,o.yg)("p",null,"However, if you ",(0,o.yg)("strong",{parentName:"p"},"don't want to have all your ",(0,o.yg)("inlineCode",{parentName:"strong"},"feat")," and ",(0,o.yg)("inlineCode",{parentName:"strong"},"fix")," commits to be added to the changelog and release notes"),", please\nlet us know in the description of your Pull Request and make sure that the ",(0,o.yg)("strong",{parentName:"p"},"title of your Pull Request follows the commit message standard instead"),"."),(0,o.yg)("h2",{id:"commit-message-wizard"},"Commit message wizard"),(0,o.yg)("p",null,"To make getting the commit message format easy for you, we've added a little ",(0,o.yg)("strong",{parentName:"p"},"commit message wizard")," that will help you generate a commit message compliant with the standard.\nWe've also configured a pre-commit git hooks and a CI/CD pipeline-level check to ensure everything's correct."),(0,o.yg)("p",null,"If you get stuck at any point, please feel free to reach out on the ",(0,o.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," and we'll help you out."),(0,o.yg)("p",null,"To use the commit message wizard, add the files you changed to ",(0,o.yg)("a",{parentName:"p",href:"https://git-scm.com/docs/git-add"},"git index")," using ",(0,o.yg)("inlineCode",{parentName:"p"},"git add <filename>"),", or your favourite IDE like ",(0,o.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/versioncontrol"},"VSCode")," or ",(0,o.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/commit-and-push-changes.html#set-passwords-for-git-remotes"},"JetBrains")),(0,o.yg)("p",null,"Next, invoke the following command in the root directory of your cloned Serenity/JS project:"),(0,o.yg)(r.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"npm run commit\n"))),(0,o.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"yarn commit\n")))),(0,o.yg)("p",null,"Which should yield output similar to the below:"),(0,o.yg)(r.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"npm run commit\n\n> serenity-js-monorepo@3.0.0-monorepo commit\n> bin/commit.ts\n\ncz-customizable standalone version\nAll lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you're proposing:\n  feat:     A new feature that will be available to the developers using Serenity/JS, e.g. a new public API\n\u276f fix:      A bug fix, prepared typically to address a specific GitHub ticket\n  docs:     Documentation only changes affecting the website, examples, or the API docs\n  style:    Changes that do not affect the meaning of the code, e.g. formatting, fixing missing semicolons, etc.\n  refactor: Improvements to code that do not affect the observable behaviour of Serenity/JS\n  perf:     A code change aimed at improving performance\n  test:     Improvements to existing internal tests, or adding missing tests\n(Move up and down to reveal more choices)\n"))),(0,o.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"yarn commit\n\n> serenity-js-monorepo@3.0.0-monorepo commit\n> bin/commit.ts\n\ncz-customizable standalone version\nAll lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you're proposing:\n  feat:     A new feature that will be available to the developers using Serenity/JS, e.g. a new public API\n\u276f fix:      A bug fix, prepared typically to address a specific GitHub ticket\n  docs:     Documentation only changes affecting the website, examples, or the API docs\n  style:    Changes that do not affect the meaning of the code, e.g. formatting, fixing missing semicolons, etc.\n  refactor: Improvements to code that do not affect the observable behaviour of Serenity/JS\n  perf:     A code change aimed at improving performance\n  test:     Improvements to existing internal tests, or adding missing tests\n(Move up and down to reveal more choices)\n")))),(0,o.yg)("p",null,"For example, if you wanted to make a documentation change to the Serenity/JS website to explain the importance of commit messages, you'd select:\n",(0,o.yg)("inlineCode",{parentName:"p"},"docs")," as the type of change, and ",(0,o.yg)("inlineCode",{parentName:"p"},"website")," as the scope of the change:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'All lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you\'re proposing: docs\n? Denote the SCOPE of this change: website\n\n? WHAT did you change? Please write a SHORT, IMPERATIVE tense description of the change:\n\n explained the importance of commit messages\n\n? WHY did you change it? Provide a LONGER description of the motivation behind the change (optional).\n  Use "|" to break new line\n\n This should help developers follow the commit message format conventions |\n and make contributing to Serenity/JS easier\n\n? List any GitHub TICKETS affected by this change (optional). E.g.: #31, #34:\n closes #2263\n\n###--------------------------------------------------------###\ndocs(website): explained the importance of commit messages\n\nThis should help developers follow the commit message format conventions\nand make contributing to Serenity/JS easier\n\nRelated tickets: closes #2263\n###--------------------------------------------------------###\n\n? Are you sure you want to proceed with the commit above? (Yneh)\n\n')),(0,o.yg)("admonition",{title:"Referencing and closing GitHub tickets",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If your change is related to a specific GitHub ticket, please mention it in your commit message when the wizard asks about it, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"#2263"),"."),(0,o.yg)("p",{parentName:"admonition"},"If your change should ",(0,o.yg)("em",{parentName:"p"},"close")," the related ticket altogether,\nplease use the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword"},(0,o.yg)("inlineCode",{parentName:"a"},"closes #<ticket number>")," syntax"),", e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"closes #2263"),".")),(0,o.yg)("p",null,"Once you're happy with the commit message, push your commit to your forked repository, and ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"raise a pull request"),"."))}d.isMDXComponent=!0},71949:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(14041),o=n(9546);const r={tabItem:"tabItem_OMyP"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:n},t)}},399:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(89575),o=n(14041),r=n(9546),i=n(91963),s=n(33480),l=n(29776);const u={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function c(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),g=e=>{const t=e.currentTarget,n=m.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:g},i,{className:(0,r.A)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function p(e){const t=(0,s.u)(e);return o.createElement("div",{className:(0,r.A)("tabs-container",u.tabList)},o.createElement(c,(0,a.A)({},e,t)),o.createElement(m,(0,a.A)({},e,t)))}function g(e){const t=(0,l.A)();return o.createElement(p,(0,a.A)({key:String(t)},e))}},33480:(e,t,n)=>{n.d(t,{u:()=>p});var a=n(14041),o=n(86090),r=n(25260),i=n(99925),s=n(30559);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,g]=m({queryString:n,groupId:o}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,s.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),h=(()=>{const e=p??d;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),g(e),y(e)}),[g,y,r]),tabValues:r}}}}]);