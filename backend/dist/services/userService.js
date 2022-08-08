"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const userDal_1 = __importDefault(require("../dal/userDal"));
const authUser = async (email, password) => {
    const user = await userDal_1.default.findUserByEmail(email);
    if (user && (await user.matchPassword(password))) {
        const LoginUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: (0, generateToken_1.default)(user._id),
        };
        return LoginUser;
    }
    else {
        throw new Error('Invalid email or password');
    }
};
const registerUser = async (name, email, password) => {
    const userExists = await userDal_1.default.findUserByEmail(email);
    if (userExists) {
        throw new Error('User already exists');
    }
    const user = await userDal_1.default.createUser(name, email, password);
    if (user) {
        const newUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: (0, generateToken_1.default)(user._id),
        };
        return newUser;
    }
    else {
        throw new Error('Invalid user data');
    }
};
exports.default = {
    authUser,
    registerUser
};
