"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const express_joi_validation_1 = require("express-joi-validation");
const userLogin_1 = require("../validation/users/userLogin");
const userRegister_1 = require("../validation/users/userRegister");
const validator = (0, express_joi_validation_1.createValidator)({});
router.route('/')
    .post(validator.body(userRegister_1.userRegister), userController_1.registerUser)
    .get(userController_1.getUsers);
router.route('/:id').get(userController_1.getUserById)
    .put(userController_1.updateUser)
    .delete(userController_1.deleteUser);
router.post('/login', validator.body(userLogin_1.userLogin), userController_1.authUser);
router.route('/profile/myProfile').get(authMiddleware_1.protect, userController_1.getUserProfile);
exports.default = router;
