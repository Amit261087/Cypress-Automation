/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

    specPattern: 'cypress/e2e/*.js  '
  },
});*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4fzpxi',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here

      on('task', {
        logStep(stepName) {
          console.log(`[Step] ${stepName}`);
          return null;
        }
      });
    },

    specPattern: 'cypress/e2e/*.js'
  },
});

