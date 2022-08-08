import express from 'express'
const router = express.Router()
import { createValidator } from 'express-joi-validation';
import {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
  updateImage
} from '../controllers/productController'
import { admin, protect } from '../middleware/authMiddleware'
import {productSchema} from '../validation/product/productSchema'


const validator = createValidator({});

router.route('/')
            .get(getProducts)
            .post(validator.body(productSchema),protect,admin,createProduct)
router.route('/:id')
             .get(getProductById)
             .put(validator.body(productSchema),protect,admin,updateProduct)
             .delete(protect,admin,deleteProduct)

router.route('/:id/updateimage')
             .patch(updateImage)                

export default router
