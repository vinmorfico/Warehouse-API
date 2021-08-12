const Users = require('../entities/Users');

class UserRepository {
  getUser(id) {
    return Users.query().findById(id).withGraphFetched('products');
  }

  getAllUser() {
    return Users.query();
  }

  getUserByLogin(login) {
    return Users.query().where('login', login);
  }

  createNewUser(name, login, password, refreshToken) {
    return Users.query().insert({
      name,
      login,
      password,
      refreshToken,
    });
  }
  updateToken(login, refreshToken) {
    return Users.query()
      .patch({ refreshToken: refreshToken })
      .where('login', login);
  }
  findToken(refreshToken) {
    return Users.query()
      .select('refreshToken')
      .where('refreshToken', refreshToken);
  }
  getUserByRefreshToken(refreshToken) {
    return Users.query().where('refreshToken', refreshToken);
  }
}

module.exports = UserRepository;
