const createNewCategory = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.createNewCategory(req);
    res.status(200).json(category);
  };
};

module.exports = createNewCategory;
