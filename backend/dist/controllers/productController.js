"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = exports.deleteProduct = exports.createProduct = exports.updateProduct = exports.getProductById = exports.getProducts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productService_1 = __importDefault(require("../services/productService"));
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = (0, express_async_handler_1.default)(async (req, res) => {
    let { _end, _order, _sort, _start, q } = req.query;
    try {
        const { count, products } = await productService_1.default.getProducts(_end, _start, q);
        res.set('X-Total-Count', count);
        res.json(products);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getProducts = getProducts;
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = (0, express_async_handler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    try {
        const product = await productService_1.default.getProductById(paramId);
        res.json(product);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getProductById = getProductById;
// @desc    Update single product
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = (0, express_async_handler_1.default)(async (req, res) => {
    const product = req.body;
    const paramId = req.params.id;
    try {
        const productItem = await productService_1.default.updateProduct(product, paramId);
        res.json(productItem);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.updateProduct = updateProduct;
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = (0, express_async_handler_1.default)(async (req, res) => {
    const product = req.body;
    try {
        const createdProduct = await productService_1.default.createProduct(product);
        res.status(201).json(createdProduct);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.createProduct = createProduct;
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = (0, express_async_handler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    try {
        const respone = await productService_1.default.deleteProduct(paramId);
        res.json(respone);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.deleteProduct = deleteProduct;
// @desc    update product image
// @route   PATCH /api/products/:id
// @access  Private/Admin
const updateImage = (0, express_async_handler_1.default)(async (req, res) => {
    const { image } = req.body;
    const paramId = req.params.id;
    try {
        const respone = await productService_1.default.updateImage(paramId, image);
        res.json(respone);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.updateImage = updateImage;
