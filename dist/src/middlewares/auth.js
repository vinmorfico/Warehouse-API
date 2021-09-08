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
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv.config();
const verifyToken = (req, res, next) => {
    const token = (() => {
        let token;
        if (req.headers['authorization']) {
            token = req.headers['authorization'].split(' ')[1];
        }
        else {
            token =
                req.body.token || req.query.token || req.headers['x-access-token'];
        }
        return token;
    })();
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_KEY);
    }
    catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};
exports.default = verifyToken;
//# sourceMappingURL=auth.js.map