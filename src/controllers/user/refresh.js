const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const refreshToken = (userService) => {
  return async (req, res) => {
    const { refreshToken } = req.body;
    const dbToken = await userService.findToken(refreshToken);
    const isEmpty = function (obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    };
    if (isEmpty(dbToken)) {
      res.status(400).send('Invalid Token');
    }
    const user = await userService.getUserByRefreshToken(refreshToken);
    const newRefreshToken = uuidv4();
    const token = jwt.sign({ login: user[0].login }, process.env.TOKEN_KEY, {
      expiresIn: '5m',
    });
    user[0].refreshToken = newRefreshToken;
    await userService.updateToken(user[0].login, user[0].refreshToken);

    res.status(200).json({
      token: token,
      refreshToken: newRefreshToken,
    });
  };
};
module.exports = refreshToken;
