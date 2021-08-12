const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

    const token = jwt.sign({ name: name }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });

    const user = await userService.createNewUser(name, login, encryptedPassword, token);

    res.status(201).json(user);
  };
};

module.exports = registerNewUser;
