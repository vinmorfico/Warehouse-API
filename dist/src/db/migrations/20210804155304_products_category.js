"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('products_category', (c) => {
        c.increments('id');
        c.string('name');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('products_category');
}
exports.down = down;
//# sourceMappingURL=20210804155304_products_category.js.map