const getCategoryById = (categoryService) => {
  return async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  };
};

module.exports = getCategoryById;
