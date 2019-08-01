const express = require("express");
const auth = require("../../authentication/auth.js");

module.exports = server => {
  server.post("/api/register", auth.register);
  server.post("/api/login", auth.login);
};
