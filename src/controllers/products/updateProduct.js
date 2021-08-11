const updateProduct = (productService) => {
  return async (req, res) => {
    const product = await productService.updateProduct(req);
    res.status(200).json(product);
  };
};

module.exports = updateProduct;
