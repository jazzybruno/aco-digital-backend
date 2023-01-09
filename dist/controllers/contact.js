"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContacts = exports.postContact = void 0;
const Contact_1 = require("../models/Contact");
const validation_1 = require("../utils/validation");
const postContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, validation_1.contactValidation)(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        const contact = new Contact_1.ContactModel(req.body);
        try {
            contact.save();
            res.status(200).send(contact);
        }
        catch (error) {
            res.status(500).send("Network Error");
        }
    }
});
exports.postContact = postContact;
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let contacts;
        contacts = yield Contact_1.ContactModel.find();
        res.send(contacts);
    }
    catch (error) {
        res.status(500).send("Network Error");
    }
});
exports.getContacts = getContacts;
