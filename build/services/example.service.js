"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = __importDefault(require("../utilities/example"));
class ExampleService {
    static async helloWork(UUID) {
        return await example_1.default.helloWork(UUID);
    }
}
exports.default = ExampleService;
//# sourceMappingURL=example.service.js.map