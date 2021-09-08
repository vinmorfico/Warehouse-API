"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPOST = exports.refreshPOST = exports.loginPOST = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginPOST = joi_1.default.object()
    .keys({
    login: joi_1.default.string().required().alphanum(),
    password: joi_1.default.string().required(),
})
    .with('login', 'password');
exports.refreshPOST = joi_1.default.object().keys({
    refreshToken: joi_1.default.string().required(),
});
exports.registerPOST = joi_1.default.object()
    .keys({
    name: joi_1.default.string().required().alphanum(),
    login: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
})
    .with('login', ['password', 'login']);
//# sourceMappingURL=schemaAuth.js.map