const mongoose = require('mongoose');
const { Schema } = mongoose;

const sodasSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    price: Number,
    img: String
  }
)

const Sodas = mongoose.model('soda', sodasSchema);

module.exports = Sodas