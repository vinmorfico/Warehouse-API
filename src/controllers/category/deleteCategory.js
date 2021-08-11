const deleteCategory = (categoryService) => {
  return async (req, res) => {
    await categoryService.deleteCategory(req.params.id);
    res.status(200).json({ status: 'deleted' });
  };
};

module.exports = deleteCategory;
