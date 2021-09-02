const { model, Schema } = require('mongoose');

const schema = new Schema(
  {
    name: String,
    login: String,
    password: String,
    refreshToken: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

schema.virtual('products', {
  ref: 'products',
  localField: '_id',
  foreignField: 'users_id',
});

const Users = model('users', schema);

module.exports = Users;
