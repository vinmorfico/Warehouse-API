"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../swagger"));
const knex_1 = __importDefault(require("./db/knex"));
const io_1 = __importDefault(require("./io"));
const error_middleware_1 = require("./middlewares/error.middleware");
const index_1 = __importDefault(require("./routes/index"));
const dotenv = __importStar(require("dotenv"));
require('express-async-errors');
dotenv.config();
const PORT = process.env.PORT || 3000;
const PATH_PUBLIC = path_1.default.join(__dirname, '/public');
const app = (0, express_1.default)();
const server = (0, http_1.createServer)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', index_1.default);
app.use('/api-info', express_1.default.static(PATH_PUBLIC));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use(error_middleware_1.newError);
app.use(error_middleware_1.errorHandler);
async function start() {
    try {
        await (0, knex_1.default)();
        io_1.default.attach(server);
        server.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`));
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=app.js.map