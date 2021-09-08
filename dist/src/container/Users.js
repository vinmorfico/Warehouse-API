"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const UserService_1 = __importDefault(require("../services/UserService"));
const userRepo = new UserRepository_1.default();
const userService = new UserService_1.default(userRepo);
const userController = new UserController_1.default(userService);
exports.default = userController;
//# sourceMappingURL=Users.js.map