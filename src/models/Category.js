const { model, Schema } = require('mongoose');

const schema = new Schema(
  {
    name: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
schema.virtual('products', {
  ref: 'products',
  localField: '_id',
  foreignField: 'category_id',
});

const Category = model('products_category', schema);

module.exports = Category;
