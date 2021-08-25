const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = (() => {
    let token;
    if (req.headers['authorization']) {
      token = req.headers['authorization'].split(' ')[1];
    } else {
      token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    }
    return token;
  })();

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

module.exports = verifyToken;
