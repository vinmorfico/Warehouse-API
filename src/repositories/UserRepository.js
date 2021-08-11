const  Users  = require('../entities/Users');

class UserRepository {
  async getUser(id) {
    return Users.query()
    .findById(id)
    .withGraphFetched('products');
  }
  async getAllUser() {
    return Users.query();
  }
}

module.exports = UserRepository;