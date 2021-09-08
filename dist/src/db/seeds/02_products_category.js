"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('products_category')
        .del();
    return await knex('products_category').insert([
        { name: 'fruits' },
        { name: 'vegetables' },
        { name: 'tools' },
    ]);
}
exports.seed = seed;
;
//# sourceMappingURL=02_products_category.js.map