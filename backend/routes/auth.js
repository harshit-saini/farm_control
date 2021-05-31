const express = require("express");
const router = express.Router();
const passport = require("passport")


router.get("/google", passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get("/google/redirect", passport.authenticate('google'), (req, res, next) => {
  res.redirect("/")
  // res.json({
  //   name: "harshit saini"
  // })
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/")
})

module.exports = router;

