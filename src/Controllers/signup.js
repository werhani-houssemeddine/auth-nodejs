const { addUser } = require("../useCases");

module.exports = async function signUp (httpRequest) {
  try {
    const { email, password, phoneNumber } = httpRequest.body;
    const result = await addUser(email, password, phoneNumber);
    
    return result;
    
  } catch (error) {
    return { status: 400, body: { message: 'Bad Request' } };
  }
}