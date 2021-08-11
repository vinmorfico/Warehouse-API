const updateCategory = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.status(200).json(category);
  };
};

module.exports = updateCategory;
