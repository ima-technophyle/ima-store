require("express-async-errors");
const express = require("express");
const logger = require("../logger/logging");
const users = require("./users");
const compress = require("compression");

module.exports = (app) => {
  app.use(compress());
  app.use(express.json());
  app.use("/api/users", users);

  app.get("*", (resp) => {
    resp.status(404).send("PATH NOT FOUND");
  });

  app.use((ex, req, resp, next) => {
    logger.error(ex);
    resp.status(500).send("UNKNOWN ERROR OCCURRED!!!");
  });
};
