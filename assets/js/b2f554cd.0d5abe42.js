"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[5894],{76042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"support-for-tags","metadata":{"permalink":"/blog/support-for-tags","editUrl":"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2024-03-09-support-for-tags/index.mdx","source":"@site/blog/2024-03-09-support-for-tags/index.mdx","title":"Support for @tags","description":"Support for tagging","date":"2024-03-09T00:00:00.000Z","formattedDate":"March 9, 2024","tags":[{"label":"web","permalink":"/blog/tags/web"},{"label":"cucumber","permalink":"/blog/tags/cucumber"},{"label":"jasmine","permalink":"/blog/tags/jasmine"},{"label":"mocha","permalink":"/blog/tags/mocha"},{"label":"playwright-test","permalink":"/blog/tags/playwright-test"},{"label":"protractor","permalink":"/blog/tags/protractor"},{"label":"webdriverio","permalink":"/blog/tags/webdriverio"},{"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":1.045,"hasTruncateMarker":false,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak"}],"frontMatter":{"slug":"support-for-tags","title":"Support for @tags","authors":["jan-molak"],"tags":["web","cucumber","jasmine","mocha","playwright-test","protractor","webdriverio","open-source"]},"nextItem":{"title":"Support for Serenity BDD 4","permalink":"/blog/support-for-serenity-bdd-4"}},"content":"![Support for tagging](./support-for-tags.png)\\n\\n\ud83d\udce3 Serenity/JS now supports tagging across all the test runners \ud83c\udf89\\n\\nWith the new release of [**Serenity/JS 3.21**](/changelog/3.21.0), tagging test scenarios just got easier.\\nNow, you can use `@tags` across all the supported test runners, so:\\n- [Cucumber](/handbook/test-runners/cucumber/)\\n- [Jasmine](/handbook/test-runners/jasmine/)\\n- [Mocha](/handbook/test-runners/mocha/)\\n- [WebdriverIO](/handbook/test-runners/webdriverio/)\\n- [Playwright Test](/handbook/test-runners/playwright-test/)\\n- [Protractor](/handbook/test-runners/protractor/)\\n\\n## Why should you tag your scenarios?\\n\\nTagging test scenarios helps you organise and filter your test suites. You can categorise tests based on functionality, priority, or type, making it easier to manage and focus your testing efforts.\\n\\nPlus, tagging allows for selective test execution. You can run a subset of tests by specifying relevant tags, which is handy for regression testing or when focusing on specific parts of your application.\\n\\nTagging also improves test reporting and integrates well with test management tools. It gives you insights into test coverage and helps streamline test planning and tracking.\\n\\nAnd if you\'re using Playwright Test, Serenity/JS supports the latest [Playwright 1.42 tag API](https://playwright.dev/docs/release-notes#version-142), enhancing your tagging capabilities even further!\\n\\n## Contributor spotlight\\n\\nA huge thank you to our Serenity/JS Contributors for their work on this release:\\n- [Otoniel Isidoro](https://www.linkedin.com/in/otoniel-isidoro-61b38512/), who enabled tagging support for Playwright Test\\n- [Mateusz Kruk](https://www.linkedin.com/in/mateusz-kruk-2784a3217/), who greatly improved Playwright Test global error handling\\n\\nEnjoy Serenity!"},{"id":"support-for-serenity-bdd-4","metadata":{"permalink":"/blog/support-for-serenity-bdd-4","editUrl":"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx","source":"@site/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx","title":"Support for Serenity BDD 4","description":"Serenity/JS 3.15.0 introduces support for Serenity BDD 4 and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73","date":"2024-01-11T00:00:00.000Z","formattedDate":"January 11, 2024","tags":[{"label":"web","permalink":"/blog/tags/web"},{"label":"rest","permalink":"/blog/tags/rest"},{"label":"reporting","permalink":"/blog/tags/reporting"},{"label":"jasmine","permalink":"/blog/tags/jasmine"},{"label":"mocha","permalink":"/blog/tags/mocha"},{"label":"protractor","permalink":"/blog/tags/protractor"},{"label":"webdriverio","permalink":"/blog/tags/webdriverio"},{"label":"playwright-test","permalink":"/blog/tags/playwright-test"},{"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":0.665,"hasTruncateMarker":false,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak"}],"frontMatter":{"slug":"support-for-serenity-bdd-4","title":"Support for Serenity BDD 4","authors":["jan-molak"],"tags":["web","rest","reporting","jasmine","mocha","protractor","webdriverio","playwright-test","open-source"]},"prevItem":{"title":"Support for @tags","permalink":"/blog/support-for-tags"},"nextItem":{"title":"Support for Playwright Test UI Mode!","permalink":"/blog/support-for-playwright-ui-mode"}},"content":"[**Serenity/JS 3.15.0**](/changelog/3.15.0) introduces support for **Serenity BDD 4** and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73\\n\\nWe\'ve also updated the Serenity/JS Handbook to help you get the most out of the new Serenity/JS and Serenity BDD reporting features - check out:\\n- [Reporting > Serenity BDD Reporter](/handbook/reporting/serenity-bdd-reporter/)\\n- [Serenity BDD Best Practices](/handbook/reporting/serenity-bdd-reporter/#serenity-bdd-best-practices) (NEW!)\\n\\n### Important changes\\n\\nIf you\'re still using the Serenity/JS 2-style syntax for registering the `SerenityBDDReporter`, you\'ll need to update your configuration file to use the Serenity/JS 3 convention:\\n\\n```diff\\n- import { ArtifactArchiver } from \'@serenity-js/core\';\\n- import { SerenityBDDReporter } from \'@serenity-js/serenity-bdd\';\\n\\n// ...\\n    crew: [\\n-     new SerenityBDDReporter(),\\n-     ArtifactArchiver.storingArtifactsAt(\'./target/site/serenity\'),\\n+     \'@serenity-js/serenity-bdd\',\\n+     [ \'@serenity-js/core:ArtifactArchiver\', {\\n+       outputDirectory: \'target/site/serenity\'\\n+     } ],\\n    ]\\n// ...\\n```\\n\\nLearn more about [Configuring Serenity BDD Reporter](/handbook/reporting/serenity-bdd-reporter/#configuration-overview)."},{"id":"support-for-playwright-ui-mode","metadata":{"permalink":"/blog/support-for-playwright-ui-mode","editUrl":"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2023-06-01-support-for-playwright-ui-mode/index.mdx","source":"@site/blog/2023-06-01-support-for-playwright-ui-mode/index.mdx","title":"Support for Playwright Test UI Mode!","description":"Playwright Logo","date":"2023-06-01T00:00:00.000Z","formattedDate":"June 1, 2023","tags":[{"label":"web","permalink":"/blog/tags/web"},{"label":"playwright","permalink":"/blog/tags/playwright"},{"label":"playwright-test","permalink":"/blog/tags/playwright-test"},{"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":0.345,"hasTruncateMarker":false,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak"}],"frontMatter":{"slug":"support-for-playwright-ui-mode","title":"Support for Playwright Test UI Mode!","authors":["jan-molak"],"tags":["web","playwright","playwright-test","open-source"]},"prevItem":{"title":"Support for Serenity BDD 4","permalink":"/blog/support-for-serenity-bdd-4"},"nextItem":{"title":"Support for WebdriverIO 8","permalink":"/blog/support-for-webdriverio-8"}},"content":"![Playwright Logo](./playwright-logo.svg)\\n\\n[**Serenity/JS 3.3.0**](/changelog/3.3.0) introduces support for **Playwright Test UI Mode**, improves support for **Playwright trace viewer**, and leverages **Playwright auto-waiting locators**! \ud83e\udd73\\n\\nCheck out our new tutorial where in **less than 5 minutes**, you\'ll learn how to **integrate Serenity/JS** with your Playwright test suite, **enable Serenity BDD reports**, start using the **Screenplay Pattern**, and get started with **Playwright Test UI Mode**!\\n\\nLearn about [Using Serenity/JS with Playwright Test](/handbook/getting-started/serenity-js-with-playwright-test/)!"},{"id":"support-for-webdriverio-8","metadata":{"permalink":"/blog/support-for-webdriverio-8","editUrl":"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2023-05-10-support-for-webdriverio-8/index.md","source":"@site/blog/2023-05-10-support-for-webdriverio-8/index.md","title":"Support for WebdriverIO 8","description":"WebdriverIO Roboter","date":"2023-05-10T00:00:00.000Z","formattedDate":"May 10, 2023","tags":[{"label":"web","permalink":"/blog/tags/web"},{"label":"webdriverio","permalink":"/blog/tags/webdriverio"},{"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":0.465,"hasTruncateMarker":false,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak"}],"frontMatter":{"slug":"support-for-webdriverio-8","title":"Support for WebdriverIO 8","authors":["jan-molak"],"tags":["web","webdriverio","open-source"]},"prevItem":{"title":"Support for Playwright Test UI Mode!","permalink":"/blog/support-for-playwright-ui-mode"},"nextItem":{"title":"Test Automation Summit, Berlin 2022","permalink":"/blog/test-automation-summit-berlin"}},"content":"![WebdriverIO Roboter](./webdriverio-roboter.png)\\n\\nSerenity/JS started to support WebdriverIO in version 2.30.0. \\n\\nIn version 3.0.0, Serenity/JS brought you [`@serenity-js/web`](/handbook/web-testing/) - a portable abstraction\\nlayer that lets you run the exact same web scenario with [WebdriverIO](/api/webdriverio), [Playwright](/api/playwright), and even [Protractor](/api/protractor)!\\n\\nNow, we\'re taking things further with [**Serenity/JS 3.2.0**](/changelog/3.2.0) introducing support for the latest and greatest **WebdriverIO 8**! \ud83e\udd73 \\n\\nCheck out our new tutorial where in **less than 5 minutes**, you\'ll learn how to **integrate Serenity/JS** with your WebdriverIO test suite, **enable Serenity BDD reports**, and start using the **Screenplay Pattern**!\\n\\nLearn about [Using Serenity/JS with WebdriverIO](/handbook/getting-started/serenity-js-with-webdriverio/)!"},{"id":"test-automation-summit-berlin","metadata":{"permalink":"/blog/test-automation-summit-berlin","editUrl":"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2022-08-29-test-automation-summit-berlin/index.md","source":"@site/blog/2022-08-29-test-automation-summit-berlin/index.md","title":"Test Automation Summit, Berlin 2022","description":"Test Automation Summit, Berlin 2022","date":"2022-08-29T00:00:00.000Z","formattedDate":"August 29, 2022","tags":[{"label":"conference","permalink":"/blog/tags/conference"},{"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":4.25,"hasTruncateMarker":true,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak"}],"frontMatter":{"slug":"test-automation-summit-berlin","title":"Test Automation Summit, Berlin 2022","authors":["jan-molak"],"tags":["conference","open-source"]},"prevItem":{"title":"Support for WebdriverIO 8","permalink":"/blog/support-for-webdriverio-8"}},"content":"![Test Automation Summit, Berlin 2022](./tas-berlin.png)\\n\\nWhen Titus Fortner ([@titusfortner](https://twitter.com/titusfortner)), the maintainer of [Watir](https://www.selenium.dev/blog/2022/test-automation-summit/) and a contributor to [Selenium](https://www.selenium.dev/), messaged me on Twitter two months ago, I knew something interesting was coming.\\n\\nTitus and I never met in person. In fact, I have never met most of the other open-source maintainers I\'ve worked with over the last ten years since I became an open-source maintainer myself and the last six years I spent working on [Serenity/JS](https://serenity-js.org).\\n\\nThis is not that surprising, to be fair. After all, have you ever met any of the people maintaining the open-source libraries and frameworks that _your work_ depends on?\\n\\nWell, in my case, this was about to change.\\n\\n\x3c!--truncate--\x3e\\n\\nWhat Titus had in mind was what became the very first [Test Automation Summit](https://www.selenium.dev/blog/2022/test-automation-summit/) - a way to help the maintainers of all the various free open-source projects facilitating web-based testing to connect better and collaborate more effectively.\\n\\nAs you might have expected, as soon as I heard _test automation_, _collaboration_ and _open source_ all in one sentence, I immediately said \\"yes!\\" \\n\\nIt wasn\'t going to be yet another Zoom call or a meetup at the local pub.\\nNo. On the contrary, what Titus envisioned was a number of working sessions over the course of several days where the open-source maintainers and representatives of the development teams behind the major web browsers look into answering several important questions:\\n- **How can we make it easier for developers to get into test automation**, and more importantly - **how can we help them do it well?** Test automation is a complex and ever-evolving domain and, let\'s face it, not the primary focus of most developers trying to get their product features shipped under tight deadlines. Even worse, there is plenty of poor advice on the Internet and many companies selling [snake oil](https://en.wikipedia.org/wiki/Snake_oil) and commercial tools that promote bad practices.\\n- **How can we make it easier for open-source projects to onboard contributors and maintainers?** Maintaining free open-source software is _much_ more work than most developers imagine and typically requires **10-40 hours per week per maintainer** **_on top_** of our regular day jobs. To put things in perspective, there are [**83 million developers**](https://en.wikipedia.org/wiki/GitHub) registered on GitHub, and **less than 100 core maintainers** who support the major test automation tools most of us rely on every day to get our work done. And I didn\'t miss a zero or few there, I\'m afraid, **less than one hundred**.\\n- So given the limited resources, **how can we be more effective as a test automation community?** Many open-source automation tools provide similar or overlapping features, and the documentation we provide to the users is vast and often challenging for newcomers to navigate. Those issues often confuse the users trying to pick the \\"right tool for the job\\". They also make beginners gravitate towards the \\"batteries included\\" commercial tools, which are technologically inferior and typically result in increased maintenance costs but tend to offer a better user experience, polished marketing, and require fewer choices and less experience.  \\n- And lastly, **what can the browsers do to make testing web applications easier?** Over the last decade, web applications have become increasingly complex and steadily replaced the more traditional desktop-based applications. web browsers have also become more sophisticated than ever, and it\'s often easier to think of them as _operating systems_ than just something that \\"renders a page\\". Even though all popular browsers nowadays provide drivers supporting the [WebDriver protocol](https://www.w3.org/TR/webdriver2/), Chromium-based browsers also support the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/). This new protocol offers greater browser control but is also much more chatty and impractical when used with remote test grids (which you\'d use for cross-browser and native mobile testing). So how can we have both **greater control** _and_ **greater versatility**?\\n\\nApart from trying to find answers to those questions, we also had an opportunity to present the open-source projects we are working on. In the many conversations we had with other maintainers, we also shared the challenges we face and the ways we have found to overcome them.\\n\\nThose challenges ranged from **technical challenges** of running a software project: How do you keep dependencies up to date? What security checks do you have in place? How do you protect your users from breaking changes? What\'s your PR process like? \\n\\nThrough **legal challenges**: How do you protect your intellectual property and brand? How do you protect the rights of your contributors? How do you keep your community safe and inclusive? \\n\\nAll the way to **challenges with funding**: How do you fund your project? How do you find sponsors? How do you make your project sustainable? Is selling your work to one of the \\"big players\\" the only way to go?\\n\\nOver those couple of days in Berlin, I had the great pleasure of learning from and exchanging ideas with the leaders of some of the most successful free open-source test automation projects.\\n\\nWatch this space \ud83d\ude0e\\n\\nJan\\n\\n![Test Automation Summit, Berlin 2022, Maintainers](./tas-berlin-maintainers.jpeg)\\n\\n_Huge thanks to the [Software Freedom Conservancy](https://sfconservancy.org/) for sponsoring my travel to the event and to [SauceLabs](https://saucelabs.com/) for sponsoring the office space in Berlin!_"}]}')}}]);