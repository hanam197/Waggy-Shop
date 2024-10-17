const dotenv = require("dotenv");
dotenv.config();

const env = {
  PORT: process.env.PORT || 2020,
  MONGO_URL: process.env.MONGO_URL,
}
module.exports = env;