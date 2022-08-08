"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const findUserByEmail = async (email) => {
    const user = await userModel_1.default.findOne({ email });
    return user;
};
const createUser = async (name, email, password) => {
    const user = await userModel_1.default.create({
        name,
        email,
        password,
    });
    return user;
};
exports.default = {
    findUserByEmail,
    createUser
};
