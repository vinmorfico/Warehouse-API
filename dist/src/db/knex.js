"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("knex");
const objection_1 = require("objection");
const knexfile_1 = __importDefault(require("../../knexfile"));
function setupDb() {
    const db = (0, knex_1.knex)(knexfile_1.default);
    objection_1.Model.knex(db);
}
exports.default = setupDb;
//# sourceMappingURL=knex.js.map