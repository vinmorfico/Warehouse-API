const getAllCategory = (categoryService) => {
  return async (_req, res) => {
    const category = await categoryService.getAllCategory();
    res.status(200).json(category);
  };
};

module.exports = getAllCategory;
