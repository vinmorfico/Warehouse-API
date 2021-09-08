"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryPUT = exports.categoryPOST = void 0;
const joi_1 = __importDefault(require("joi"));
exports.categoryPOST = joi_1.default.object().keys({
    name: joi_1.default.string().alphanum(),
});
exports.categoryPUT = joi_1.default.object().keys({
    name: joi_1.default.string(),
});
//# sourceMappingURL=schemaCategory.js.map