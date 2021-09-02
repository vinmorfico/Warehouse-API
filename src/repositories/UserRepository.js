const Users = require('../models/Users');

class UserRepository {
  getUser(id) {
    return Users.findOne({ _id: id })
      .select('name login password refreshToken')
      .populate({
        path: 'products',
        select: 'name description price amount_left category_id users_id',
      })
      .lean();
  }

  getAllUser() {
    return Users.find({}).select('name login password refreshToken').lean();
  }

  getUserByLogin(login) {
    return Users.find({ login: login }).lean();
  }

  createNewUser(name, login, password, refreshToken) {
    const user = new Users({
      name,
      login,
      password,
      refreshToken,
    });
    user.save();
    return user;
  }

  updateToken(login, refreshToken) {
    return Users.findOneAndUpdate(
      { login: login },
      { refreshToken: refreshToken },
      { new: true }
    );
  }

  getUserByRefreshToken(refreshToken) {
    return Users.findOne({ refreshToken: refreshToken }).lean();
  }
}

module.exports = UserRepository;
