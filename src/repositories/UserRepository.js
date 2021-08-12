const Users = require('../entities/Users');

class UserRepository {
  async getUser(id) {
    return Users.query().findById(id).withGraphFetched('products');
  }

  async getAllUser() {
    return Users.query();
  }

  async getUserByLogin(login) {
    return Users.query().where('login', login);
  }

  async createNewUser(name, login, password, token) {
    return Users.query().insert({
      name,
      login,
      password,
      token,
    });
  }
  async updateToken(login, token) {
    return Users.query().patch({ token: token }).where('login', login);
  }
}

module.exports = UserRepository;
