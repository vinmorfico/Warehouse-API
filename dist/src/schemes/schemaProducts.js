"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsPUT = exports.productsPOST = void 0;
const joi_1 = __importDefault(require("joi"));
exports.productsPOST = joi_1.default.object().keys({
    name: joi_1.default.string().required().alphanum(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    amount_left: joi_1.default.number().required(),
    category_id: joi_1.default.number().min(1).required(),
    users_id: joi_1.default.number().min(1).required(),
});
exports.productsPUT = joi_1.default.object().keys({
    name: joi_1.default.string().alphanum(),
    description: joi_1.default.string(),
    price: joi_1.default.number(),
    amount_left: joi_1.default.number(),
    category_id: joi_1.default.number().min(1),
    users_id: joi_1.default.number().min(1),
});
//# sourceMappingURL=schemaProducts.js.map