const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (userService) => {
  return async (req, res) => {
    const { login, password } = req.body;
    if (!(login && password)) {
      res.status(400).send('All input is required');
    }
    const user = await userService.getUserByLogin(login);
    if (user && (await bcrypt.compare(password, user[0].password))) {

      const token = 
       jwt.sign({ login: login }, process.env.TOKEN_KEY, {
        expiresIn: '2h',
      });
      user[0].token = token;

      await userService.updateToken(login, token);

      res.status(200).json(user);
    }
    res.status(400).send('Invalid Credentials');
  };
};

module.exports = login;
