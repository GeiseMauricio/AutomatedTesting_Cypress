const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
  e2e: {
    projectId: "ru78k3",
    viewportWidth: 1000,
    viewportHeight: 660,
    baseUrl: 'https://buger-eats-qa.vercel.app',
    

    
   
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
