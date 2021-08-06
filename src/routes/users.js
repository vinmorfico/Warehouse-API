const { Router } = require('express');
const router = Router();
const Users = require('../db/models/Users');

router.get('/', async (_req, res, next) => {
  try {
    const users = await Users.query();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await Users.query().findById(req.params.id).withGraphFetched('products');
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = {
  router: router,
};
