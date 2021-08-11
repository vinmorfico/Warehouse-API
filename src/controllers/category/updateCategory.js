const updateCategory = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.updateCategory(req);
    res.status(200).json(category);
  };
};

module.exports = updateCategory;
