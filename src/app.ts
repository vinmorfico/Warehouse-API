import * as dotenv from 'dotenv';
import io from './io';
import createServer from './server';

require('express-async-errors');
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = createServer();
const server = require('http').Server(app);

async function start() {
  try {
    io.attach(server);
    server.listen(PORT, () =>
      console.log(`Server is listening at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
start();
