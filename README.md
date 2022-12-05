# Introduction

This repository contains technical home tasks of:
 - http://ptsv2.com/t/ and https://www.tesonet.com/career/ - automation task (http://ptsv2.com/t/ api is broken)
 - https://api.nordvpn.com/v1/helpers/ips/insights and https://nordcheckout.com/api-pricing

Under this direcotry there is two solutions: 
- codecept_nord_home_task_solution_1: CodeceptJS + Axios (Node.js) [integreation] and CodeceptJS + Playwright(Node.js) [e2e]
- jasmine_nord_home_task_solution_2: tried Jasmine implementation: Jasmine + Axios (Node.js) [integreation]

# Installation
1. Open solution folder `codecept_nord_home_task_solution_1`
2. Install, Node and npm (make sure you are using Long Term Support node version 18.x.x)
   -- find out which node version you have by using 'node -v' command.
3. Run npm install

# Technologies
- For E2E (front-end): CodeceptJS + Playwright(Node.js)
- For Integration (API): CodeceptJS + Axios (Node.js) -> chose instead of Jasmine + Axios because it's easier to set up and execution times are similar and using test execution parallelism faster.

With CodeceptJS I have ability to write same code base for E2E and integrations tests.
Neverless very usefull feature is test execution in parallel [more info: https://codecept.io/parallel/#parallel-execution]

# File structure
Framework configuration:
- api.codecept.conf.js
- web.codecept.conf.js

Data test files:
- data/*

Test files:
- api/tests/*Test.js
- web/tests/*Test.js

Page object files:
- api/tests/pageObjects/*Page.js
- web/tests/pageObjects/*Page.js

# Executing tests

Open solutions folder: 
   codecept_nord_home_task_solution_1 or cd codecept_nord_home_task_solution_1

Run Integration (api) tests [TASK1]:
- npm run test-api-insights
- npm run test-api-insights-multiple (run test in parallel)

Run E2E (front-end) tests [TASK2]:
- npm run test-web (single); 
- npm run test-web-multiple (run test in parallel)


# Reporting

For detailed reporting change config to mocha.reporterOptions.codeceptjs-cli-reporter.options.verbose: true

.html report files you can find:
- api/output/report.html
- web/output/report.html

# Additional information about project architecture

Used helper classes in the project. Helpers are saved in helpers/ folder.

It is mandatory not to invoke other helpers in a helper file.
