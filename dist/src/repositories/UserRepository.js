"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const Users_1 = require("../entities/Users");
class UserRepository {
    getUser(id) {
        return Users_1.Users.query().findById(id).withGraphFetched('products');
    }
    getAllUser() {
        return Users_1.Users.query();
    }
    getUserByLogin(login) {
        return Users_1.Users.query().where('login', login);
    }
    createNewUser(name, login, password, refreshToken) {
        return Users_1.Users.query().insert({
            name,
            login,
            password,
            refreshToken,
        });
    }
    updateToken(login, refreshToken) {
        return Users_1.Users.query()
            .patch({ refreshToken: refreshToken })
            .where('login', login);
    }
    findToken(refreshToken) {
        return Users_1.Users.query()
            .select('refreshToken')
            .where('refreshToken', refreshToken);
    }
    getUserByRefreshToken(refreshToken) {
        return Users_1.Users.query().where('refreshToken', refreshToken);
    }
}
exports.UserRepository = UserRepository;
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map