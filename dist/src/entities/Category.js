"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const objection_1 = require("objection");
class Category extends objection_1.Model {
    static get tableName() {
        return 'products_category';
    }
    static get relationMappings() {
        const Products = require('./Products');
        return {
            products: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Products,
                join: {
                    from: 'products_category.id',
                    to: 'products.category_id',
                },
            },
        };
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map