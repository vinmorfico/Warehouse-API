const { model, Schema } = require('mongoose');

const schema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    amount_left: Number,
    category_id: String,
    users_id: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

schema.virtual('user', {
  ref: 'users',
  localField: 'users_id',
  foreignField: '_id',
  justOne: true,
});

schema.virtual('category', {
  ref: 'products_category',
  localField: 'category_id',
  foreignField: '_id',
  justOne: true,
});

const Products = model('products', schema);

module.exports = Products;
