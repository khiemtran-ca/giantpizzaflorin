const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    order: [{
      qty: Number,
      id: String,
      size: String,
      name: String,
      price: Number
    }],
    grandTotal: Number
  },

  { timestamps: true }
)

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer