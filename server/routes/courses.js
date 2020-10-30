let CourseModel = require("../models/course");
let AccountModel = require("../models/account");
let express = require("express");
let router = express.Router();

//update this to not use a call back

router.get("/", function (req, res, next) {
  console.log(req);
  //res.send("courses route called"); this will not let you send the json response back because it seems like once you send one message back to the client then the headers are "locked"
  CourseModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// router.get("/", function (req, res, next) {
//   console.log(req);
//   AccountModel.findOne(
//     {
//       account_id: 371138,
//     },
//     function (err, result) {
//       if (err) {
//         res.send(err);
//       } else {
//         console.log(result);
//         res.json(result);
//       }
//     }
//   );
// });

module.exports = router;
