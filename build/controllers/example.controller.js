"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuidv4_1 = require("uuidv4");
const example_service_1 = __importDefault(require("../services/example.service"));
const exampleController = (0, express_1.Router)();
const endpoint = '/';
exampleController.get(endpoint, async (request, response) => {
    try {
        const UUID = (0, uuidv4_1.uuid)();
        const message = await example_service_1.default.helloWork(UUID);
        response.status(200).send(message);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
exports.default = exampleController;
//# sourceMappingURL=example.controller.js.map