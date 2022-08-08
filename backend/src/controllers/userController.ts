import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken'
import userService from '../services/userService'
import User from '../models/userModel'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userService.authUser(email,password)
    res.json(user)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await userService.registerUser(name,email,password)
    res.json(user)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})



// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req:any, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Get user profile
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  let {_end, _order , _sort , _start, q}  = req.query
  
  if(!_end) _end =  await User.count({})
  if(!_start) _start = '0'

  
  const recordes = Number(_end) - Number(_start)
  if(recordes <= 0) {
    res.status(404)
    throw new Error('somthing went wrong with end & start')
  } 
  const skiping = Number(_start) / recordes
  const users = await User.find({})
                          .limit(recordes)
                          .skip(skiping * recordes)

  const count = await User.count({})
  
  res.set('X-Total-Count', count)
  res.json(users)
})



// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Public
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})




// @desc    update user by id
// @route   PUT /api/users/:id
// @access  Public

const updateUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    isAdmin
  } = req.body


  const user = await User.findById(req.params.id)

  if (user) {
    user.name = name
    user.email = email
    user.isAdmin = isAdmin

    const updatedUser = await user.save()
    res.json(updatedUser)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})




export { authUser, registerUser, getUserProfile,getUsers,getUserById,updateUser,deleteUser}


