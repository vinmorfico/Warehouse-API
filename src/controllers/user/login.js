const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const login = (userService) => {
  return async (req, res) => {
    const { login, password } = req.body;
    if (!(login && password)) {
      res.status(400).send('All input is required');
    }
    const user = await userService.getUserByLogin(login);
    if (user && (await bcrypt.compare(password, user[0].password))) {
      const refreshToken = uuidv4();
      const token = jwt.sign({ login: login }, process.env.TOKEN_KEY, {
        expiresIn: '5m',
      });
      user[0].refreshToken = refreshToken;
      await userService.updateToken(login, refreshToken);

      res.status(200).json({
        token: token,
        refreshToken: refreshToken,
      });
    }
    res.status(400).send('Invalid Credentials');
  };
};

module.exports = login;
