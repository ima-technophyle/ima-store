const logger = require("../logger/logging");

process.on("uncaughtException", (ex) => {
  logger.error(ex);
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  logger.error(ex);
  process.exit(1);
});
