const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET || '';

const generateToken = (payload) => {
  return jwt.sign(payload, TOKEN_SECRET);
}

const verifyToken = (token) => {
  return jwt.verify(token, TOKEN_SECRET)
}

module.exports = { generateToken, verifyToken }