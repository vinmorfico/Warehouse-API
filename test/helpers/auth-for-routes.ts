import jwt from 'jsonwebtoken';

function generateToken() {
  const token = jwt.sign('test', process.env.TOKEN_KEY as string, {
    expiresIn: '55m',
  });

  return token;
}

export default generateToken;
