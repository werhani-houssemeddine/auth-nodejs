const { generateToken, verifyToken } = require('../../infra/index')
function generate(payload) {
  return generateToken(payload);
}

function verify(token) {
  return verifyToken(token);
}

module.exports = { verifyToken: verify, generateToken: generate };