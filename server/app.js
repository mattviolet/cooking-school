var createError = require("http-errors");
var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require("cors");

//mongoDB and mongoose setup info
//const mongoose = require("mongoose");
/*const mongoURI =
  "mongodb+srv://mviolet:12771Mlab!@cluster0.xctiz.mongodb.net/killian-cooking-school?retryWrites=true&w=majority";*/

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var foodRouter = require("./routes/food");
var accountRouter = require("./routes/account");
var courseRouter = require("./routes/courses");

//mongoose.connect(mongoURI);

//// console.log(error);

var app = express();

//serve up the public folder
const publicPath = path.join(__dirname, "../build");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up on port${port}!`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/food", foodRouter);
app.use("/account", accountRouter);
app.use("/courses", courseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
