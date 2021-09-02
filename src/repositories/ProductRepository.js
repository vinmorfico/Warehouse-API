const Products = require('../models/Products');

class ProductRepository {
  createNewProduct(query) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    const product = new Products({
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    });
    product.save();
    const newProduct = {
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      amount_left: product.amount_left,
      category_id: product.category_id,
      users_id: product.users_id,
    };
    return newProduct;
  }

  deleteProduct(id) {
    return Products.deleteOne({ _id: id }).lean();
  }

  getAllProducts() {
    return Products.find({}).select('name description price amount_left category_id users_id').lean();
  }

  getProductById(id) {
    return Products.findOne({ _id: id })
      .select('name description price amount_left category_id users_id')
      .populate({ path: 'category', select: 'name' })
      .populate({ path: 'user', select: 'name login password refreshToken' })
      .lean();
  }

  updateProduct(id, query) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    return Products.findOneAndUpdate(
      { _id: id },
      { name, description, price, amount_left, category_id, users_id },
      { new: true }
    )
      .select('name description price amount_left category_id users_id')
      .lean();
  }
}

module.exports = ProductRepository;
