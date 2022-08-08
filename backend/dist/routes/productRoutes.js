"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_joi_validation_1 = require("express-joi-validation");
const productController_1 = require("../controllers/productController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const productSchema_1 = require("../validation/product/productSchema");
const validator = (0, express_joi_validation_1.createValidator)({});
router.route('/')
    .get(productController_1.getProducts)
    .post(validator.body(productSchema_1.productSchema), authMiddleware_1.protect, authMiddleware_1.admin, productController_1.createProduct);
router.route('/:id')
    .get(productController_1.getProductById)
    .put(validator.body(productSchema_1.productSchema), authMiddleware_1.protect, authMiddleware_1.admin, productController_1.updateProduct)
    .delete(authMiddleware_1.protect, authMiddleware_1.admin, productController_1.deleteProduct);
router.route('/:id/updateimage')
    .patch(productController_1.updateImage);
exports.default = router;
