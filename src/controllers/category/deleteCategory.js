const deleteCategory = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.deleteCategory(req.params.id);
    res.status(200).json(category);
  };
};

module.exports = deleteCategory;
