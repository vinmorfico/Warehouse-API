const getProductsById = (productService) => {
  return async (req, res) => {
    const product = await productService.getProductsById(req.params.id);
    res.status(200).json(product);
  };
};

module.exports = getProductsById;
