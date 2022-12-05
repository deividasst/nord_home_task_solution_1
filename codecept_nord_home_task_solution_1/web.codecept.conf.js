/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: './web/*Test.js',
  output: './web/output',
  helpers: {
    Playwright: {
      url: 'https://www.tesonet.com',
      show: false, // headless mode should be false by default; 
      browser: 'chromium',
      args: [
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--user-data-dir="/tmp/chromium"',
        '--disable-web-security',
        '--disable-features=site-per-process',
      ]
    },
    REST: {
      prettyPrintJson: true,
    },
    JSONResponse: {},
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: './steps_file.js',
    careerCategoriesPage: './web/tests/pageObjects/careerCategoriesPage.js',
    productPage: './web/tests/pageObjects/productPage.js',
    planPage: './web/tests/pageObjects/planPage.js',
    logInPage: './web/tests/pageObjects/logInPage.js',
    paymentPage: './web/tests/pageObjects/paymentPage.js',
    paymentApiPage: './api/tests/pageObjects/paymentApiPage.js',
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
        },
      },
      mochawesome: {
        stdout: './web/output/console.log',
        options: {
          reportDir: './web/output',
          reportFilename: 'report',
        },
      },
      'mocha-junit-reporter': {
        stdout: './web/output/console.log',
        options: {
          mochaFile: './web/output/result.xml',
          attachments: true, //add screenshot for a failed test
        },
      },
    },
  },
  name: 'nord_home_task'
}