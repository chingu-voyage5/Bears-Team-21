const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to db");
});

module.exports = {
  mongoose
};
