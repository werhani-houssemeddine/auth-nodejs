module.exports = {
  hashData      : require('./bcrypt').hashData,
  compareData   : require('./bcrypt').compareData,
  generateToken : require('./token').generateToken,
  verifyToken   : require('./token').verifyToken,
}