"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('products', (p) => {
        p.increments('id');
        p.string('name');
        p.text('description');
        p.decimal('price');
        p.integer('amount_left');
        p.integer('category_id').references('id').inTable('products_category');
        p.integer('users_id').references('id').inTable('users');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('products');
}
exports.down = down;
//# sourceMappingURL=20210805102135_products.js.map