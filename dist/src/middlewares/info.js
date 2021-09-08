"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const io_1 = __importDefault(require("../io"));
const info = (req, _res, next) => {
    const ent = req.baseUrl.split('/')[2];
    const entity = ent.charAt(0).toUpperCase() + ent.substr(0, ent.length - 1).slice(1);
    const id = req.url.split('/')[1];
    switch (req.method) {
        case 'POST':
            fs_1.default.appendFileSync('log.txt', `New ${entity} has been created ${JSON.stringify(req.body.product)}\n`, 'utf8');
            io_1.default.emit(`create${entity}`, req.body.product);
            break;
        case 'PUT':
            fs_1.default.appendFileSync('log.txt', `${entity} with ID ${id} has been changed ${JSON.stringify(req.body)}\n`, 'utf8');
            console.log(`edit${entity}`);
            io_1.default.emit(`edit${entity}`, id, req.body);
            break;
        case 'DELETE':
            fs_1.default.appendFileSync('log.txt', `${entity} with ID ${id} has been deleted\n`, 'utf8');
            io_1.default.emit(`delete${entity}`, id);
            break;
    }
    next();
};
exports.default = info;
//# sourceMappingURL=info.js.map