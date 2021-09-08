"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('users')
        .del();
    return await knex('users').insert([
        {
            name: 'Vasya',
            login: 'qwerty234',
            password: await bcryptjs_1.default.hash('qwerty234', 10),
        },
        {
            name: 'Bodya',
            login: 'qwerty1231',
            password: await bcryptjs_1.default.hash('qwerty1231', 10),
        },
        {
            name: 'Ruslan',
            login: 'qwerty123',
            password: await bcryptjs_1.default.hash('qwerty123', 10),
        },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=01_users.js.map