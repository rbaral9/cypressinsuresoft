const { defineConfig } = require("cypress");

/* const { express } = require('express');
const {sql} = require("mssql");
const {app} = express(); */

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        //Create4 task -take query and connection as parameters
        ReadFromDB(dbcon, sqlQuery) {
          // Create new SQL client
          const client = new sql.pool(dbcon);
          return client.sqlQuery(sqlQuery);
        },
      });
    },
    dbconfig: {
      user: "DevUser",
      password: "DevUser",
      server: "RBDEV",
      database: "ContractManagement",
      options: {
        trustServerCertificate: true,
      },
    },
  },

  video: false,

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
