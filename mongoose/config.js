const mongoose = require("mongoose");
const config = require("config");
const logger = require("../logger/logging");

const url = config.get("db.url");
mongoose.connect(url, () => {
  logger.info(`Connected to MongoDB ${url}`);
});
