"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_actuator_1 = __importDefault(require("express-actuator"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const example_controller_1 = __importDefault(require("./controllers/example.controller"));
const app = (0, express_1.default)(); // NOSONAR
const apiPath = config_1.default.API_PATH; // NOSONAR
const fullApiPath = `${apiPath}/V1/hello`;
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../static')));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // NOSONAR
    res.header('Access-Control-Allow-Headers', '*'); // NOSONAR
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // NOSONAR
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use((0, express_actuator_1.default)({
    basePath: '/management',
}));
app.use(fullApiPath, example_controller_1.default);
exports.default = app;
//# sourceMappingURL=main.js.map