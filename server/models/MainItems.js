const mongoose = require('mongoose');
const { Schema } = mongoose;

const mainItemsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    },
    prices: {
      type: Array,
      required: true
    },
    img: String,
    description: String
  }
)

const MainItems = mongoose.model('mainItem', mainItemsSchema);

module.exports = MainItems