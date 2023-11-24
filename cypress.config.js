const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: 'ru8d99',
  e2e: {
    "baseUrl": "http://devstable.eastus.cloudapp.azure.com:8083",
    "defaultCommandTimeout": 10000,
   
  },
});
