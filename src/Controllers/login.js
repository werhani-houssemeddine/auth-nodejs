const { authenticateUser } = require("../useCases");

module.exports = async function login (httpRequest) {
  try {
    const { email, password } = httpRequest.body;
    const result = await authenticateUser(email, password);
    
    return result;
    
  } catch (error) {
    return { status: 400, body: { message: 'Bad Request' } };
  }
}