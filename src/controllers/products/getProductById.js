const getProductById = (productService) => {
  return async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  };
};

module.exports = getProductById;
