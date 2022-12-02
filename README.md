# Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

# Getting Started - WEB

1. Install Java, Node and npm (make sure you are using Long Term Support node version 18.x.x)
   -- find out which node version you have by using 'node -v' command.
2. Run npm install
3. Run tests: npm run test-web (single); npm run test-web-multiple (run test in parallel)

# Reporting

For detailed reporting change config to mocha.reporterOptions.codeceptjs-cli-reporter.options.verbose: true

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Additional information about project architecture

We are using helper classes in the project. Helpers are saved in /helpers/ folder and imported in codecept.conf.js files.

It is mandatory not to invoke other helpers in a helper file.

- Example => const apiHelper = require('../../../helpers/apiHelper'),
  should not be invoked in any of the helpers without rechecking that it doesnt break any of existing tests.

If a new helper file is created and if there is a demand to see function reference created by clicking on it (CTRIL + left click),
then a command needs to be run in the terminal "npx codeceptjs def --config=web.codecept.conf.js" to refresh web.codecept.conf.js
file strcuture (notice that web.codecept.conf.js is just an example here and same can be done with api and mobile config files)
