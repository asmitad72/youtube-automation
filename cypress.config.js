const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: "a5x6ox",
    defaultCommandTimeout: 10000,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        specPattern: 'cypress/integration/*.js',
        testIsolation: false
    }
});
