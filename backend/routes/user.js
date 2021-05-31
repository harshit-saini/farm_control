// farmer is the user

const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("react app requesting for user info")
  if (req.user && req.user.id) {
    const currentUser = await User.findOne({ _id: req.user.id });
    res.json({ currentUser });
  } else {
    res.json({ error: "no user is logged in" })
  }
})

router.get("/all", async (req, res, next) => {
  const allUsers = await User.find({});
  res.json(allUsers)
})

module.exports = router;