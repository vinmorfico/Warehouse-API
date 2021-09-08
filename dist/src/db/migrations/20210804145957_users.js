"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('users', (u) => {
        u.increments('id');
        u.string('name');
        u.string('login');
        u.string('password');
        u.string('refreshToken');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('users');
}
exports.down = down;
//# sourceMappingURL=20210804145957_users.js.map