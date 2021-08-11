const createNewCategory = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.createNewCategory(req.body.name);
    res.status(200).json(category);
  };
};

module.exports = createNewCategory;
