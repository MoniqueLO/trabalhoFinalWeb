const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    reporter: "cypress-multi-reporters", 
    reporterOptions: {
      reporterEnabled: "mochawesome", 
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mochawesome", 
        overwrite: false,
        html: false,
        json: true,
        charts: true,
        reportPageTitle: 'Relatório de Testes - Automation Exercise',
        embeddedScreenshots: true,
        inlineAssets: true,
      },
    },
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require("./webpack.config.js"),
      };
      on("file:preprocessor", webpack(options));
      return config;
    },
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      USER_NAME: process.env.EXISTENT_USERNAME,
      USER_EMAIL: process.env.EXISTENT_USEREMAIL,
      USER_PASSWORD: process.env.EXISTENT_PASSWORD,
    },
  },
});
