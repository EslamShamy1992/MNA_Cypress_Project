const { defineConfig } = require("cypress");
const {verifyDownloadTasks}= require('cy-verify-downloads')



module.exports = defineConfig({
  projectId: 'ru8d99',
  reporter: 'cypress-mochawesome-reporter',
  video: false,

 reporterOptions: {

 charts: true,

 reportPageTitle: 'Cypress Inline Reporter',

 embeddedScreenshots: true, 

 inlineAssets: true, //Adds the asserts inline

 },
  e2e: {
    "baseUrl": "http://devstable.eastus.cloudapp.azure.com:8083",
    "defaultCommandTimeout": 60000,
    "experimentalRunAllSpecs": true,
    setupNodeEvents(on,config){
      on('task',verifyDownloadTasks);
      require('cypress-mochawesome-reporter/plugin')(on);
      
    }
   
   
  },
});
