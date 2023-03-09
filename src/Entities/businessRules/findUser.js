const { UserRepository } = require('../../Repositories');
const User = require('../../Repositories/User.repository');

module.exports = async ({ property, value }) => {
  try {
    const user = await UserRepository.findByProperty({ property, value });

    return user.length === 0 ? null : user[0];

  } catch (error) {
    return error;
  }
}