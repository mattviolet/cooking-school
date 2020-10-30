let AccountModel = require("../models/account");

let express = require("express");
let router = express.Router();

//et accounts = AccountModel.accounts;

console.log("hey im here!");
//console.log(accounts);

//GET an account
//try making this without a call back! 2020!
router.get("/", function (req, res, next) {
  console.log(req);
  AccountModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      //console.log(result);
      res.json(result);
    }
  });
});

module.exports = router;
