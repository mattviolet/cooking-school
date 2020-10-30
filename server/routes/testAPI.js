var express = require("express");
var router = express.Router();

/* GET test API */
router.get("/", function (req, res, next) {
  res.send("API is working properly");
  console.log(res);
});

module.exports = router;
