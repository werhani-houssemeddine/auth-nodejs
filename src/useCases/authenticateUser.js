const validateLoginCredentials = require('../Entities/login.entity');
const { findUser, generateToken, compareData } = require('../Entities/businessRules');

module.exports = async function (_email, _password) {
  try {
    const { email, password } = validateLoginCredentials(_email, _password);
  
    const existUser = await findUser({ property: 'email', value: email });
    if(!existUser) return { status: 401, body: { message: 'Email or Password are incorects', 'a': 'a' }};

    const muchPassword = await compareData(existUser.password, password);
    if(!muchPassword) return { status: 401, body: { message: 'Email or Password are incorects', 'p': 'p' }};

    const payload = { id: existUser.id, email };
    const token = generateToken(payload);

    return { status: 200, body: { state: true, token, email }};

  } catch (error) {
    return { status: 400, body: { message: 'Bad request', error: error.message }}
  }
}