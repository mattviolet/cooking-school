var express = require("express");
var router = express.Router();

// GET
router.get("/", function (req, res, next) {
  res.send("This route gives you food! Yum!");
  console.log(res);
});

module.exports = router;
