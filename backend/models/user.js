// farmer is the user

const mongoose = require("mongoose")
const { DeviceSchema } = require("../models/device")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: {
    type: String
  },
  name: {
    type: String
  },
  profileImgURL: {
    type: String
  },
  location: {
    type: String
  },
  devices: {
    type: [Schema.Types.ObjectId],
    ref: "Device"
  }
  // devices: [DeviceSchema]
})

const User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };
