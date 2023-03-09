const { UserRepository } = require('../../Repositories');

module.exports = async ({ email, password, phoneNumber }) => {
  try {
    const user = await UserRepository.saveUser({ email, password, phoneNumber });

    return user.state ? user : null;

  } catch (error) {
    return error;
  }
}