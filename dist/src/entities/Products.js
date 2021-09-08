"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const objection_1 = require("objection");
class Products extends objection_1.Model {
    static get tableName() {
        return 'products';
    }
    static get relationMappings() {
        const Category = require('./Category');
        const Users = require('./Users');
        return {
            category: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Category,
                join: {
                    from: 'products.category_id',
                    to: 'products_category.id',
                },
            },
            users: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Users,
                join: {
                    from: 'products.users_id',
                    to: 'users.id',
                },
            },
        };
    }
}
exports.Products = Products;
//# sourceMappingURL=Products.js.map