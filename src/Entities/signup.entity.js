const { validEmail } = require('./businessRules');
module.exports = function createSignUpCredentials(email, password, phoneNumber) {
  

  if(!email) throw new Error('Email required');
  if(!password) throw new Error('Password required');
  if(!phoneNumber) throw new Error('Phone number required');

  if(!Number.isSafeInteger(phoneNumber) || (phoneNumber < 10 ** 7 || phoneNumber >= 10 ** 8)) 
    throw new Error('Invalid Phone number')
  
  const _email = email.trim()?.toLowerCase();
  const _password = password.trim();

  if(!validEmail(email)) throw new Error('Invalid email');
  if(_password.length < 8) throw new Error('Invalid password, length must be more than 8');

  return { 
    email: _email, 
    password: _password, 
    phoneNumber
  };
}