const getAllProducts = (productService) => {
  return async (_req, res) => {
    const product = await productService.getAllProducts();
    res.status(200).json(product);
  };
};

module.exports = getAllProducts;
