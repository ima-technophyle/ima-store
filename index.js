const express = require("express")();
const config = require("config");
const logger = require("./logger/logging");
require("./error handler/errorHandler");
require("./mongoose/config");
require("./routes/route")(express);

const port = config.get("port");
const server = express.listen(port, () => {
  logger.info(`App started at port: ${port}`);
});

module.exports = server;
