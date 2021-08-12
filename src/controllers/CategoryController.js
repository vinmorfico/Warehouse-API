class CategoryController {
  constructor(CategoryService) {
    this.categoryService = CategoryService;
  }

  createNewCategory = async (req, res) => {
    const category = await this.categoryService.createNewCategory(req.body.name);
    res.status(200).json(category);
  };

  deleteCategory = async (req, res) => {
    await this.categoryService.deleteCategory(req.params.id);
    res.status(200).json({ status: 'deleted' });
  };

  getAllCategory = async (_req, res) => {
    console.log(this)
    const category = await this.categoryService.getAllCategory();
    res.status(200).json(category);
  };

  getCategoryById = async (req, res) => {
    const category = await this.categoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  };

  updateCategory = async (req, res) => {
    const category = await this.categoryService.updateCategory(
      req.params.id,
      req.body.name
    );
    res.status(200).json(category);
  };
}

module.exports = CategoryController;
