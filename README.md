# Introduction

This repository contains technical home tasks of:
 - http://ptsv2.com/t/ and https://www.tesonet.com/career/ - automation task (http://ptsv2.com/t/ api is broken)
 - https://api.nordvpn.com/v1/helpers/ips/insights and https://nordcheckout.com/api-pricing


# Installation

1. Install, Node and npm (make sure you are using Long Term Support node version 18.x.x)
   -- find out which node version you have by using 'node -v' command.
2. Run npm install

# Technologies
- For E2E (front-end): CodeceptJS + Playwright(Node.js)
- For Integration (API): CodeceptJS + Axios (Node.js) -> chose instead of jasmine + Axios because it's easier to set up and execution times are similar.

With CodeceptJS I have ability to write same code base for E2E and integrations tests.

# Executing tests

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

# Additional information about project architecture

We are using helper classes in the project. Helpers are saved in helpers/ folder.

It is mandatory not to invoke other helpers in a helper file.
