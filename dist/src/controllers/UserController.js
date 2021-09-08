"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const schemaParamsId_1 = require("../routes/schemaParamsId");
const schemaAuth_1 = require("../schemes/schemaAuth");
dotenv.config();
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.getAllUsers = async (_req, res) => {
            const users = await this.userService.getAllUser();
            res.status(200).json(users);
        };
        this.getUser = async (req, res) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            const users = await this.userService.getUser(req.params.id);
            res.status(200).json(users);
        };
        this.login = async (req, res) => {
            await schemaAuth_1.loginPOST.validateAsync(req.body);
            const { login, password } = req.body;
            if (!(login && password)) {
                res.status(400).send('All input is required');
            }
            const user = await this.userService.getUserByLogin(login);
            if (user && (await bcryptjs_1.default.compare(password, user[0].password))) {
                const refreshToken = (0, uuid_1.v4)();
                const token = jsonwebtoken_1.default.sign({ login: login }, process.env.TOKEN_KEY, {
                    expiresIn: '55m',
                });
                user[0].refreshToken = refreshToken;
                await this.userService.updateToken(login, refreshToken);
                res.status(200).json({
                    token: token,
                    refreshToken: refreshToken,
                });
            }
            res.status(400).send('Invalid Credentials');
        };
        this.refreshToken = async (req, res) => {
            await schemaAuth_1.refreshPOST.validateAsync(req.body);
            const { refreshToken } = req.body;
            const dbToken = await this.userService.findToken(refreshToken);
            const isEmpty = function (obj) {
                for (let _key in obj) {
                    return false;
                }
                return true;
            };
            if (isEmpty(dbToken)) {
                res.status(400).send('Invalid Token');
            }
            const user = await this.userService.getUserByRefreshToken(refreshToken);
            const newRefreshToken = (0, uuid_1.v4)();
            const token = jsonwebtoken_1.default.sign({ login: user[0].login }, process.env.TOKEN_KEY, {
                expiresIn: '55m',
            });
            user[0].refreshToken = newRefreshToken;
            await this.userService.updateToken(user[0].login, user[0].refreshToken);
            res.status(200).json({
                token: token,
                refreshToken: newRefreshToken,
            });
        };
        this.registerNewUser = async (req, res) => {
            await schemaAuth_1.registerPOST.validateAsync(req.body);
            const { name, login, password } = req.body;
            if (!(password && name && login)) {
                res.status(400).send('All input is required');
            }
            const oldUser = await this.userService.getUserByLogin(login);
            const isNotEmpty = function (obj) {
                for (let _key in obj) {
                    return true;
                }
                return false;
            };
            if (isNotEmpty(oldUser)) {
                return res.status(409).send('User Already Exist. Please Login');
            }
            const encryptedPassword = await bcryptjs_1.default.hash(password, 10);
            const refreshToken = (0, uuid_1.v4)();
            const token = jsonwebtoken_1.default.sign({ login: login }, process.env.TOKEN_KEY, {
                expiresIn: '55m',
            });
            const user = await this.userService.createNewUser(name, login, encryptedPassword, refreshToken);
            res.status(201).json({ user });
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map