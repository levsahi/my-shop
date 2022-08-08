import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel'
import orderService from '../services/orderService'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrder = asyncHandler(async (req:any, res:any) => {
  const {
    orderItems,
    orderInfo,
    totalPrice
  } = req.body
  const userId = req.user._id
   
  try{
    const createdOrder = await orderService.addOrder(orderItems,orderInfo,totalPrice,userId)
    res.status(201).json(createdOrder)
  }catch(err:any){
    res.status(400)
    console.log(err.message)
    throw new Error(err.message)
  }

  
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req:any, res:any) => {

  let {_end, _start}  = req.query
  const userId = req.user._id
  try{
    const {count,orders} = await orderService.getMyOrders(_end, _start,userId)
    res.set('X-Total-Count', count)
    res.json(orders)
  }catch(err:any){
    res.status(400)
    throw new Error(err.message)
  }
 
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req:any, res:any) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
   const paramId = req.params.id
   const {
    id,
    status,
    update_time,
    payer,
  } = req.body

  try {
     const updatedOrder = orderService.updateOrderToPaid(paramId,id,status,update_time,payer)
     res.json(updatedOrder)
  }catch (err:any) {
    res.status(400)
    throw new Error(err.message)
  }

})


// @desc    get download links of songs
// @route   GET /api/orders/:id/downloaddetails
// @access  Private
const getDownloadDetails = asyncHandler(async (req, res) => {
  const paramId = req.params.id
  try{
    const songLinks = await orderService.getDownloadDetails(paramId)
    res.json(songLinks)
  }catch (err:any) {
    res.status(400)
    throw new Error(err.message)
  }
  
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
          .populate('user', 'id name')
  
  res.set('X-Total-Count', orders.length)        
  res.json(orders)
})

export {
  addOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  getDownloadDetails,
  getAllOrders
}
