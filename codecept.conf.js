exports.config = {
  tests: './features/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.mercadolibre.com',
      show: true,             
      browser: 'chromium',
      waitForTimeout: 10000
    }
  },
  include: {
    I: './steps_file.js',
    mercadolibre_page: './pages/mercadolibre_page.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/mercadolibre_steps.js']
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir:'output/allure-results',
      useCucumberSteps: true    
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
       deleteSuccessful: false,
       animateSlides: false
    },
    pauseOnFail: {
      enabled: false
    }
  },
  mocha: {},
  name: 'test-mercadolibre'
};
