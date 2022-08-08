import express from 'express'
const router = express.Router()
import {
  addOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  getAllOrders
} from '../controllers/orderController'
import { protect, admin } from '../middleware/authMiddleware'

router.route('/')
      .post(protect, addOrder)
      .get(protect, admin, getAllOrders)
router.route('/myorders').get(protect, getMyOrders)                
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
