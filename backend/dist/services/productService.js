"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../models/productModel"));
const getProducts = async (_end, _start, q) => {
    if (!_end)
        _end = await productModel_1.default.count({});
    if (!_start)
        _start = 0;
    const keyword = q ? {
        name: {
            $regex: q,
            $options: 'i',
        },
    }
        : {};
    const recordes = _end - _start;
    if (recordes <= 0) {
        throw new Error('somthing went wrong with end & start');
    }
    const skiping = _start / recordes;
    const products = await productModel_1.default.find({ ...keyword })
        .limit(recordes)
        .skip(skiping * recordes);
    const count = await productModel_1.default.count({});
    return { count, products };
};
const getProductById = async (paramId) => {
    const product = await productModel_1.default.findById(paramId);
    if (product) {
        return product;
    }
    else {
        throw new Error('Product not found');
    }
};
const updateProduct = async (productItem, paramId) => {
    const { name, img, description, price, catagory } = productItem;
    const product = await productModel_1.default.findById(paramId);
    if (product) {
        product.name = name;
        product.img = img;
        product.description = description;
        product.price = price;
        product.catagory = catagory;
        const updatedProduct = await product.save();
        return updatedProduct;
    }
    else {
        throw new Error('Product not found');
    }
};
const createProduct = async (productItem) => {
    const { name, img, description, price, catagory } = productItem;
    const product = new productModel_1.default({
        name,
        img,
        description,
        price,
        catagory
    });
    const createdProduct = await product.save();
    return createdProduct;
};
const deleteProduct = async (paramId) => {
    const product = await productModel_1.default.findById(paramId);
    if (product) {
        await product.remove();
        return { message: 'Product removed' };
    }
    else {
        throw new Error('Product not found');
    }
};
const updateImage = async (paramId, image) => {
    const product = await productModel_1.default.findById(paramId);
    if (product) {
        product.image = image;
        const updatedProduct = await product.save();
        return updatedProduct;
    }
    else {
        throw new Error('Product not found');
    }
};
exports.default = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateImage
};
