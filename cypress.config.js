const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 660,
    baseUrl: 'https://buger-eats-qa.vercel.app',

    setupNodeEvents(on, config) {
      // implement node event listeners here
           
    },
   
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
