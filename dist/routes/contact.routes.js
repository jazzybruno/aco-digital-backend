"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
const swaggiffy_1 = require("swaggiffy");
exports.contactRouter = express_1.default.Router();
exports.contactRouter.get('/contact', (req, res) => {
    (0, contact_1.getContacts)(req, res);
});
exports.contactRouter.post('/contact', (req, res) => {
    (0, contact_1.postContact)(req, res);
});
(0, swaggiffy_1.registerDefinition)(exports.contactRouter, { tags: "Contact", mappedSchema: "ContactModel", path: "/" });
