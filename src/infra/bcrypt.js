const bcrypt = require('bcrypt');

async function compare(hashedValue, value) {
  const result = await bcrypt.compare(value, hashedValue);

  return result;
}

async function hash(value) {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(value, salt);

  return result;
}

module.exports = { hashData: hash, compareData: compare }