const express = require("express");
const Joi = require("joi");
const Collection = require("../mongoose/models/User");

const route = express.Router();

route.get("/", async (req, resp) => {
  const users = await Collection.find(
    {},
    { name: 1, email: 1, password: 1, _id: 0 }
  );
  resp.send(users);
});

route.post("/", async (req, resp) => {
  const { value, error } = validateUser(req.body);
  if (error) {
    return resp.status(400).send(error.message);
  }

  const users = await Collection.find();
  const isPresent = users.findIndex((user) => user.email === value.email);
  if (isPresent !== -1) {
    return resp.status(400).send(`${value.email} is already registered`);
  }

  const user = new Collection(value);
  const response = await user.save();
  resp.send(response);
});

function validateUser(request) {
  const schema = Joi.object({
    email: Joi.string().required().min(10).max(25),
    name: Joi.string().required().min(3).max(10),
    password: Joi.string().required().min(5).max(15),
  });

  return schema.validate(request);
}

module.exports = route;
