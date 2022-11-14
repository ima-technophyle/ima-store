const express = require("express")();
const { has, get } = require("config");
const logger = require("./logger/logging");
require("./error handler/errorHandler");
require("./mongoose/config");
require("./routes/route")(express);

const port = has("port") ? get("port") : 3009;
const server = express.listen(port, () => {
  logger.info(`App started at port: ${port}`);
});

module.exports = server;
