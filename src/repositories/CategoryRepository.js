const Category = require('../models/Category');

class CategoryRepository {
  createNewCategory(query) {
    const category = new Category({
      name: query.name,
      products: query.products,
    });
    category.save();
    const newCategory = { id: category._id, name: category.name };
    return newCategory;
  }

  deleteCategory(id) {
    return Category.deleteOne({ _id: id }).lean();
  }

  getAllCategory() {
    return Category.find({}).select('name').lean();
  }

  getCategoryById(id) {
    return Category.findOne({ _id: id })
      .select('name')
      .populate({
        path: 'products',
        select: 'name description price amount_left category_id users_id',
      })
      .lean();
  }

  updateCategory(id, query) {
    return Category.findOneAndUpdate(
      { _id: id },
      { name: query.name },
      { new: true }
    )
      .select('name')
      .lean();
  }
}

module.exports = CategoryRepository;
