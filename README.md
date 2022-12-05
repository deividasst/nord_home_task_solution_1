# Introduction

This repository contains technical home tasks of:
 - http://ptsv2.com/t/ and https://www.tesonet.com/career/ - automation task (http://ptsv2.com/t/ api is broken)
 - https://api.nordvpn.com/v1/helpers/ips/insights and https://nordcheckout.com/api-pricing


# Installation

1. Install Java, Node and npm (make sure you are using Long Term Support node version 18.x.x)
   -- find out which node version you have by using 'node -v' command.
2. Run npm install

# Technologies
- For E2E (front-end): CodeceptJS + Playwright(Node.js)
- For Integration (API): CodeceptJS + Axios (Node.js)

# Executing tests

Run Integration (api) tests [TASK1]:
- npm run test-api-insights
- npm run test-api-insights-multiple (run test in parallel)

Run E2E (front-end) tests [TASK2]:
- npm run test-web (single); 
- npm run test-web-multiple (run test in parallel)


# Reporting

For detailed reporting change config to mocha.reporterOptions.codeceptjs-cli-reporter.options.verbose: true

# Additional information about project architecture

We are using helper classes in the project. Helpers are saved in /helpers/ folder and imported in codecept.conf.js files.

It is mandatory not to invoke other helpers in a helper file.

- Example => const apiHelper = require('../../../helpers/apiHelper'),
  should not be invoked in any of the helpers without rechecking that it doesnt break any of existing tests.

If a new helper file is created and if there is a demand to see function reference created by clicking on it (CTRIL + left click),
then a command needs to be run in the terminal "npx codeceptjs def --config=web.codecept.conf.js" to refresh web.codecept.conf.js
file structure (notice that web.codecept.conf.js is just an example here and same can be done with api and mobile config files)
