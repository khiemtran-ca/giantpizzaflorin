const mongoose = require('mongoose');
const { Schema } = mongoose;

const SideItemsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    size: String,
    price: Number,
    img: String,
    description: String
  }
)

const SideItems = mongoose.model('sideItem', SideItemsSchema);

module.exports = SideItems