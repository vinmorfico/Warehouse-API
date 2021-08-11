const { Users } = require('../entities/Users');

class UserRepository {
  async getUser(user) {
    return Users.query()
    .findById(user.id)
    .withGraphFetched('products');
  }
  async getAllUser() {
    return Users.query();
  }
}

module.exports = UserRepository;