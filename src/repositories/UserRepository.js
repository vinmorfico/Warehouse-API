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

  async createNewUser(name, login, password, refreshToken) {
    return Users.query().insert({
      name,
      login,
      password,
      refreshToken,
    });
  }
  async updateToken(login, refreshToken) {
    return Users.query()
      .patch({ refreshToken: refreshToken })
      .where('login', login);
  }
  async findToken(refreshToken) {
    return Users.query()
      .select('refreshToken')
      .where('refreshToken', refreshToken);
  }
  async getUserByRefreshToken(refreshToken) {
    return Users.query().where('refreshToken', refreshToken);
  }
}

module.exports = UserRepository;
