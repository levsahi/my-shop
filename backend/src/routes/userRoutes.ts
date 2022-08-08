import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController'
import { protect } from '../middleware/authMiddleware'
import { createValidator } from 'express-joi-validation';
import { userLogin } from '../validation/users/userLogin'
import {userRegister} from '../validation/users/userRegister'

const validator = createValidator({});

router.route('/')
      .post(validator.body(userRegister),registerUser)
      .get(getUsers)
router.route('/:id').get(getUserById)
                    .put(updateUser)
                    .delete(deleteUser)
router.post('/login',validator.body(userLogin), authUser)
router.route('/profile/myProfile').get(protect ,getUserProfile)


export default router
