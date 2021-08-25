class ProductController {
  constructor(ProductService) {
    this.productService = ProductService;
  }

  createNewProduct = async (req, res, next) => {
    const product = await this.productService.createNewProduct(req.body);
    req.newEntity = product;
    res.status(201).json(product);
    next();
  };

  deleteProduct = async (req, res, next) => {
    await this.productService.deleteProduct(req.params.id);
    res.status(200).json({ status: 'deleted' });
    next();
  };

  getAllProducts = async (_req, res) => {
    const product = await this.productService.getAllProducts();
    res.status(200).json(product);
  };

  getProductById = async (req, res) => {
    const product = await this.productService.getProductById(req.params.id);
    res.status(200).json(product);
  };

  updateProduct = async (req, res, next) => {
    const product = await this.productService.updateProduct(
      req.params.id,
      req.body
    );
    res.status(200).json(product);
    next();
  };
}

module.exports = ProductController;
