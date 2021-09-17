import UserRepository from '../repositories/UserRepository';

class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  getUser(id: string) {
    return this.userRepo.getUser(id);
  }

  getAllUser() {
    return this.userRepo.getAllUser();
  }

  getUserByLogin(login: string) {
    return this.userRepo.getUserByLogin(login);
  }
  createNewUser(
    name: string,
    login: string,
    password: string,
    refreshToken: string
  ) {
    return this.userRepo.createNewUser(name, login, password, refreshToken);
  }
  updateToken(login: string, refreshToken: string) {
    return this.userRepo.updateToken(login, refreshToken);
  }
  findToken(refreshToken: string) {
    return this.userRepo.findToken(refreshToken);
  }
  getUserByRefreshToken(refreshToken: string) {
    return this.userRepo.getUserByRefreshToken(refreshToken);
  }
}

export default UserService;