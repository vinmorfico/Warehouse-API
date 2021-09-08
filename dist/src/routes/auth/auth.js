"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("../../container/Users"));
const router = (0, express_1.Router)();
router.post('/login', Users_1.default.login);
router.post('/refresh', Users_1.default.refreshToken);
router.post('/register', Users_1.default.registerNewUser);
exports.default = router;
//# sourceMappingURL=auth.js.map