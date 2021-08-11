const deleteProduct = (productService) => {
  return async (req, res) => {
    await productService.deleteProduct(req.params.id);
    res.status(200).json({ deleted });
  };
};

module.exports = deleteProduct;
