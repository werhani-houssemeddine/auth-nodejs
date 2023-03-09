// this function will verify that the credentials are valid
// and return an object containing { email: string, password: string }

const { validEmail } = require('./businessRules/')

module.exports = function createCredentials(email, password) {
  
  if(!email) throw new Error('Email required');
  if(!password) throw new Error('Password required');
  
  const _email = email.trim()?.toLowerCase();
  const _password = password.trim();

  if(!validEmail(email)) throw new Error('Invalid email');
  if(_password.length < 8) throw new Error('Invalid password, length must be more than 8');

  return { email: _email, password: _password };
}
