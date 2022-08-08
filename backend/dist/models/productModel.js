"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: 'https://thumbs.dreamstime.com/b/new-product-stamp-round-grunge-sign-label-181923461.jpg',
    },
    description: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: String,
        default: Date
    }
}, {
    timestamps: true,
});
productSchema.pre('save', async function (next) {
    if (this._id !== this.id) {
        this.id = this._id;
    }
    next();
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
