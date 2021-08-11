class UserService {
  constructor(UserRepository) {
    this.userRepo = UserRepository;
  }

  async getUser(id) {
    return await this.userRepo.getUser(id);
  }

  async getAllUser() {
    return await this.userRepo.getAllUser();
  }
}

module.exports = UserService;
