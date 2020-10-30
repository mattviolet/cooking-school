let mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://mviolet:12771Mlab!@cluster0.xctiz.mongodb.net/sample_analytics?retryWrites=true&w=majority";

mongoose.set("useCreateIndex", true);
mongoose.connect(mongoURI);

// let AccountSchema = new mongoose.Schema({
//   account_id: Number,
//   limit: Number,
//   products: [],
// });

//not based on schema

let AccountSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
});

module.exports = mongoose.model("Account", AccountSchema);
