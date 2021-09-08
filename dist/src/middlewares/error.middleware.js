"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.newError = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const newError = (req, _res, next) => {
    if (req.method !== 'GET') {
        next((0, http_errors_1.default)(405));
        return;
    }
    next((0, http_errors_1.default)(404));
};
exports.newError = newError;
const errorHandler = (err, _req, res, _next) => {
    res.status(err.status || 500);
    res.json({ message: err.message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map