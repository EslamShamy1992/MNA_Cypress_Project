const { defineConfig } = require("cypress");
const {verifyDownloadTasks}= require('cy-verify-downloads')



module.exports = defineConfig({
  projectId: 'ru8d99',
  
  e2e: {
    "baseUrl": "http://devstable.eastus.cloudapp.azure.com:8083",
    "defaultCommandTimeout": 10000,
    "experimentalRunAllSpecs": true,
    setupNodeEvents(on,config){
      on('task',verifyDownloadTasks)
    }
   
   
  },
});
