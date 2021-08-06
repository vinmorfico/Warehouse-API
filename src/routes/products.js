const { Router } = require('express');
const router = Router();
const Products = require('../db/models/Products');

router.get('/', async (_req, res, next) => {
  try {
    const products = await Products.query();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Products.query()
      .findById(req.params.id)
      .withGraphFetched('products_category')
      .withGraphFetched('users');
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, description, price, amount_left, category_id, users_id } =
      req.body;
    const product = await Products.query().insert({
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { name, description, price, amount_left, category_id, users_id } =
      req.body;
    const product = await Products.query().patchAndFetchById(req.params.id, {
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Products.query().deleteById(req.params.id);
    const products = await Products.query();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = {
  router: router,
};
