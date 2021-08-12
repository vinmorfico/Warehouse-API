class ProductController {
  constructor(ProductService) {
    this.productService = ProductService;
  }

  createNewProduct = async (req, res) => {
    const product = await this.productService.createNewProduct(req.body);
    res.status(200).json(product);
  };

  deleteProduct = async (req, res) => {
    await this.productService.deleteProduct(req.params.id);
    res.status(200).json({ status: 'deleted' });
  };

  getAllProducts = async (_req, res) => {
    const product = await this.productService.getAllProducts();
    res.status(200).json(product);
  };

  getProductById = async (req, res) => {
    const product = await this.productService.getProductById(req.params.id);
    res.status(200).json(product);
  };

  updateProduct = async (req, res) => {
    const product = await this.productService.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  };
}

module.exports = ProductController;
