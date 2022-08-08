import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    userInfo:{
      email: { type: String, required: true }
    },
    orderItems: [
      {
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        qauntity: { type: Number, required: true},
        product: {
          type: mongoose.Schema.Types.ObjectId,
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
    orderNumber:{
      type: String,
    },
    paidAt: {
      type: Date,
    },   
  },
  {
    timestamps: true,
  }
)


orderSchema.pre('save', async function (next) {
  if(this._id !== this.id){
     this.id = this._id
  }
  next()
})


const Order = mongoose.model('Order', orderSchema)

export default Order
