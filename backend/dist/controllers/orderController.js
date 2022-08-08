"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.getDownloadDetails = exports.updateOrderToPaid = exports.getOrderById = exports.getMyOrders = exports.addOrder = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const orderService_1 = __importDefault(require("../services/orderService"));
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrder = (0, express_async_handler_1.default)(async (req, res) => {
    const { orderItems, orderInfo, totalPrice } = req.body;
    const userId = req.user._id;
    try {
        const createdOrder = await orderService_1.default.addOrder(orderItems, orderInfo, totalPrice, userId);
        res.status(201).json(createdOrder);
    }
    catch (err) {
        res.status(400);
        console.log(err.message);
        throw new Error(err.message);
    }
});
exports.addOrder = addOrder;
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = (0, express_async_handler_1.default)(async (req, res) => {
    let { _end, _start } = req.query;
    const userId = req.user._id;
    try {
        const { count, orders } = await orderService_1.default.getMyOrders(_end, _start, userId);
        res.set('X-Total-Count', count);
        res.json(orders);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getMyOrders = getMyOrders;
// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = (0, express_async_handler_1.default)(async (req, res) => {
    const order = await orderModel_1.default.findById(req.params.id).populate('user', 'name email');
    if (order) {
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error('Order not found');
    }
});
exports.getOrderById = getOrderById;
// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = (0, express_async_handler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    const { id, status, update_time, payer, } = req.body;
    try {
        const updatedOrder = orderService_1.default.updateOrderToPaid(paramId, id, status, update_time, payer);
        res.json(updatedOrder);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.updateOrderToPaid = updateOrderToPaid;
// @desc    get download links of songs
// @route   GET /api/orders/:id/downloaddetails
// @access  Private
const getDownloadDetails = (0, express_async_handler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    try {
        const songLinks = await orderService_1.default.getDownloadDetails(paramId);
        res.json(songLinks);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getDownloadDetails = getDownloadDetails;
// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = (0, express_async_handler_1.default)(async (req, res) => {
    const orders = await orderModel_1.default.find({})
        .populate('user', 'id name');
    res.set('X-Total-Count', orders.length);
    res.json(orders);
});
exports.getAllOrders = getAllOrders;
