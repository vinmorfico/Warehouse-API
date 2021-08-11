const createNewProduct = (productService) => {
  return async (req, res) => {
    const product = await productService.createNewProduct(req.body);
    res.status(200).json(product);
  };
};

module.exports = createNewProduct;
