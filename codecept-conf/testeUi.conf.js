const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/**',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.saucedemo.com',
      show: true,
      windowSize: '1200x900',
      smartWait: 5000,
      browser: "chrome",
      restart: false,
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    }
  },
  include: {
    I: './steps_file.js',
    pedidosSite: './pages/pedidosSite.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'testUI',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}