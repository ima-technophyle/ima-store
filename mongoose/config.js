const mongoose = require("mongoose");
const config = require("config");
const logger = require("../logger/logging");

const url = config.get("db.url");
mongoose.connect(url).then(() => {
  logger.info(`Connected to MongoDB`);
});
