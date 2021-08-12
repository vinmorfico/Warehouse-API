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

  async getUserByLogin(login) {
    return await this.userRepo.getUserByLogin(login);
  }
  async createNewUser(name, login, password, token) {
    return await this.userRepo.createNewUser(name, login, password, token);
  }
  async updateToken(login, token) {
    return await this.userRepo.updateToken(login, token);
  }
  
}

module.exports = UserService;
