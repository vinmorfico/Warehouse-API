"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    getUser(id) {
        return this.userRepo.getUser(id);
    }
    getAllUser() {
        return this.userRepo.getAllUser();
    }
    getUserByLogin(login) {
        return this.userRepo.getUserByLogin(login);
    }
    createNewUser(name, login, password, refreshToken) {
        return this.userRepo.createNewUser(name, login, password, refreshToken);
    }
    updateToken(login, refreshToken) {
        return this.userRepo.updateToken(login, refreshToken);
    }
    findToken(refreshToken) {
        return this.userRepo.findToken(refreshToken);
    }
    getUserByRefreshToken(refreshToken) {
        return this.userRepo.getUserByRefreshToken(refreshToken);
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map