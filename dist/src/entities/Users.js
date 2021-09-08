"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const objection_1 = require("objection");
class Users extends objection_1.Model {
    static get tableName() {
        return 'users';
    }
    static get relationMappings() {
        const Products = require('./Products');
        return {
            products: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Products,
                join: {
                    from: 'users.id',
                    to: 'products.users_id',
                },
            },
        };
    }
}
exports.Users = Users;
//# sourceMappingURL=Users.js.map