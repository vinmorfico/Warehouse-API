const createNewProduct = (productService) => {
  return async (req, res) => {
    const { name, description, price, amount_left, category_id, users_id } =
      req.body;
    const product = await productService.createNewProduct(
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id
    );
    res.status(200).json(product);
  };
};

module.exports = createNewProduct;
