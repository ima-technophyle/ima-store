// const mail = require("./Mail");

function abc(a) {
  if (!a) throw new Error("OMG...");
  return sendMail();
}

function sendMail() {
  return "mail send: ";
}

module.exports.fun = abc;
module.exports.mail = sendMail;
