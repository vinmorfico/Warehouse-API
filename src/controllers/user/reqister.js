const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const registerNewUser = (userService) => {
  return async (req, res) => {
    const { name, login, password } = req.body;

    if (!(password && name && login)) {
      res.status(400).send('All input is required');
    }
    const oldUser = await userService.getUserByLogin(login);
    const isNotEmpty = function (obj) {
      for (let key in obj) {
        return true;
      }
      return false;
    };
    if (isNotEmpty(oldUser)) {
      return res.status(409).send('User Already Exist. Please Login');
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const refreshToken = uuidv4();
    const token = jwt.sign({ login: login }, process.env.TOKEN_KEY, {
      expiresIn: '5m',
    });

    const user = await userService.createNewUser(
      name,
      login,
      encryptedPassword,
      refreshToken
    );

    res.status(201).json({ user, token: token });
  };
};

module.exports = registerNewUser;
