"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    id: {
        type: String
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    userInfo: {
        email: { type: String, required: true }
    },
    orderItems: [
        {
            name: { type: String, required: true },
            img: { type: String, required: true },
            price: { type: Number, required: true },
            qauntity: { type: Number, required: true },
            product: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    orderNumber: {
        type: String,
    },
    paidAt: {
        type: Date,
    },
}, {
    timestamps: true,
});
orderSchema.pre('save', async function (next) {
    if (this._id !== this.id) {
        this.id = this._id;
    }
    next();
});
const Order = mongoose_1.default.model('Order', orderSchema);
exports.default = Order;
