const  Users  = require('../entities/Users');

class UserService {
  constructor(UserRepository) {
    this.userRepo = UserRepository;
  }

  async getUser({ User }) {
    // {User} its instance of the class Users
    return await this.userRepo.getUser({ User });
  }

  async getAllUser() {
    return await this.userRepo.getAllUser();
  }
}

module.exports = UserService;
