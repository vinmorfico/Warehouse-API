const mongoose = require('mongoose');
require('dotenv').config();
const { DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`;

async function initDb() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
}

module.exports = initDb;
