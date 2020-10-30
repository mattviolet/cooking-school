let mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://mviolet:12771Mlab!@cluster0.xctiz.mongodb.net/sample_analytics?retryWrites=true&w=majority";

const mongoURI =
  "mongodb+srv://mviolet:12771Mlab!@cluster0.xctiz.mongodb.net/cooking_school?retryWrites=true&w=majority";

const connection = mongoose.createConnection(mongoURI);

// try {
//   await mongoose.connect(mongoURI, { useNewUrlParser: true });
// } catch (error) {
//   console.log(error);
// }

let courseSchema = new mongoose.Schema({
  course_id: Number,
  name: String,
  description: String,
  price: Number,
  seats_left: Number,
  location: String,
  date: Date,
});

const Course = connection.model("Course", courseSchema);

module.exports = Course;
