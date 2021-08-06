const { Router } = require('express');
const router = Router();
const Products_category = require('../db/models/Products_category');

router.get('/', async (_req, res, next) => {
  try {
    const products_category = await Products_category.query();
    res.json(products_category);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const products_category = await Products_category.query().findById(
      req.params.id
    ).withGraphFetched('products');
    res.json(products_category);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const products_category = await Products_category.query().insert({
      name: req.body.name,
    });
    res.json(products_category);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const products_category = await Products_category.query().patchAndFetchById(
      req.params.id,
      {
        name: req.body.name,
      }
    );
    res.json(products_category);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Products_category.query().deleteById(req.params.id);
    const products_category = await Products_category.query();
    res.json(products_category);
  } catch (err) {
    next(err);
  }
});

module.exports = {
  router: router,
};
