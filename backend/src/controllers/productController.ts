import asyncHandler from 'express-async-handler'
import productService from '../services/productService'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  let {_end, _order , _sort , _start, q}  = req.query
  try {
     const {count,products} = await productService.getProducts(_end,_start,q)
     res.set('X-Total-Count', count)
     res.json(products)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
  
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const paramId = req.params.id
  
  try {
    const product = await productService.getProductById(paramId)
    res.json(product)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})


// @desc    Update single product
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
  const product = req.body
  const paramId = req.params.id
  
  try {
    const productItem = await productService.updateProduct(product,paramId)
    res.json(productItem)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }

  
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = req.body

  try {
    const createdProduct = await productService.createProduct(product)
    res.status(201).json(createdProduct)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id

  try {
    const respone = await productService.deleteProduct(paramId)
    res.json(respone)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})




// @desc    update product image
// @route   PATCH /api/products/:id
// @access  Private/Admin
const updateImage = asyncHandler(async (req, res) => {
  const {image} = req.body
  const paramId = req.params.id

  try {
    const respone = await productService.updateImage(paramId,image)
    res.json(respone)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})

export { getProducts, getProductById,updateProduct,createProduct,deleteProduct,updateImage }