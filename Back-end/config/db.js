const mongoose = require("mongoose");
const env = require("./enviroment")

const connectMongodb = () => {
  mongoose.connect(env.MONGO_URL)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Connection failed!", err);
    });
};

module.exports = connectMongodb;
