const validateSingUpCredentials = require('../Entities/signup.entity');
const { findUser, generateToken, hashData, saveUser } = require('../Entities/businessRules');

module.exports = async function (email, password, phoneNumber) {
  try {
    const signUpEntity = validateSingUpCredentials(email, password, phoneNumber);
    
    const existUser = await findUser({ property: 'email', value: email });
    if(existUser) return { status: 401, body: { message: 'This email is already taken ' } };

    const hashedPassword = await hashData(signUpEntity.password);
    const { id } = await saveUser({ email, password: hashedPassword, phoneNumber });

    const payload = { id: email, phoneNumber };
    const token = generateToken(payload);

    return { status: 201, body: { state: true, id, token, email, phoneNumber } };

  } catch (error) {
    return { status: 400, body: { message: 'Bad request', error: error.message } };
  }
  
}