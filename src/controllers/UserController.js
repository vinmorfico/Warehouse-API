const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

class UserController {
  constructor(UserService) {
    this.userService = UserService;
  }

  getAllUsers = async (_req, res) => {
    const users = await this.userService.getAllUser();
    res.status(200).json(users);
  };

  getUser = async (req, res) => {
    const users = await this.userService.getUser(req.params.id);
    res.status(200).json(users);
  };

  login = async (req, res) => {
    const { login, password } = req.body;
    if (!(login && password)) {
      res.status(400).send('All input is required');
    }
    const user = await this.userService.getUserByLogin(login);
    if (user && (await bcrypt.compare(password, user[0].password))) {
      const refreshToken = uuidv4();
      const token = jwt.sign({ login: login }, process.env.TOKEN_KEY, {
        expiresIn: '55m',
      });
      user[0].refreshToken = refreshToken;
      await this.userService.updateToken(login, refreshToken);

      res.status(200).json({
        token: token,
        refreshToken: refreshToken,
      });
    }
    res.status(400).send('Invalid Credentials');
  };

  refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    const user = await this.userService.getUserByRefreshToken(refreshToken);
    const isEmpty = function (obj) {
      for (let _key in obj) {
        return false;
      }
      return true;
    };
    if (isEmpty(user)) {
      res.status(400).send('Invalid Token');
    } else {
      const newRefreshToken = uuidv4();
      const token = jwt.sign({ login: user.login }, process.env.TOKEN_KEY, {
        expiresIn: '5m',
      });
      user.refreshToken = newRefreshToken;
      await this.userService.updateToken(user.login, user.refreshToken);

      res.status(200).json({
        token: token,
        refreshToken: newRefreshToken,
      });
    }
  };

  registerNewUser = async (req, res) => {
    const { name, login, password } = req.body;

    if (!(password && name && login)) {
      res.status(400).send('All input is required');
    }
    const oldUser = await this.userService.getUserByLogin(login);
    const isNotEmpty = function (obj) {
      for (let _key in obj) {
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

    const user = await this.userService.createNewUser(
      name,
      login,
      encryptedPassword,
      refreshToken
    );
    const { id } = user;

    res
      .status(201)
      .json({ id, name, login, password: encryptedPassword, refreshToken, token });
  };
}

module.exports = UserController;
