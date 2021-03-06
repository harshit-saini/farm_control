const express = require("express")
const router = express.Router();
const { Device } = require("../models/device")
const { User } = require("../models/user")

// add a new device
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


// get all devices
router.get("/", async (req, res, next) => {
  try {
    const allDevices = await Device.find({}).populate("owner")
    res.json([...allDevices])
  } catch (error) {
    console.log(error)
    res.json({ error: "some error occured" })
  }
})


// assign device to a user
// 1. update the owner field in the device 
// 2. add the device to the owner devices list
router.post("/update/:deviceID", async (req, res, next) => {
  try {

    // update the owner field in the device
    const device = await Device.findOne({ _id: req.params.deviceID });
    const allOwners = [req.body.farmerID, ...device.owner]
    const updatedDevice = await Device.findOneAndUpdate({ _id: req.params.deviceID }, { isAssigned: true, owner: allOwners })

    // update devices in user
    const user = await User.findOne({ _id: req.body.farmerID });
    const allDevices = [updatedDevice._id, ...user.devices]
    const updatedUser = await User.findOneAndUpdate({ _id: req.body.farmerID }, { devices: allDevices });

    res.json({ message: "device assigned to the user" })

  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

router.post("/edit/:deviceID", async (req, res, next) => {
  try {
    const updatedDevice = await Device.findOneAndUpdate({ _id: req.params.deviceID }, { name: req.body.name, isPumpOn: req.body.isPumpOn });
    res.json(updatedDevice)
  } catch (error) {
    res.json(error)
  }
})


router.get("/data", async (req, res, next) => {
  try {
    const d = new Date();
    d.toLocaleString();

    const updatedDevice = await Device.findOneAndUpdate({ _id: req.query.id }, {
      moistureLevel: req.query.moisture,
      updatedAt: d
    })
    if (updatedDevice.isPumpOn === true) {
      res.json({ pump: 1 })
    } else if (updatedDevice.isPumpOn === false) {
      res.json({ pump: 0 })
    }
  } catch (error) {
    console.log(error)
  }

})



module.exports = router;