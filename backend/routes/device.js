const express = require("express")
const router = express.Router();
const { Device } = require("../models/device")


router.post("/", async (req, res, next) => {
  try {
    const newDevice = await Device.create({
      physicalID: req.body.physicalID
    })
    res.json({ message: "posted" })
  } catch (error) {
    console.log(error)
    res.json({ error: "some error occured. try again" })
  }
})

router.get("/", async (req, res, next) => {
  try {
    const allDevices = await Device.find({})
    res.json([...allDevices])
  } catch (error) {
    console.log(error)
    res.json({ error: "some error occured" })
  }
})

module.exports = router;