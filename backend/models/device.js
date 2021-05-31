/*
name
_id
isPumpOn
moistureLevel
updatedAt
physcialNumber
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  name: {
    type: String
  },
  moistureLevel: {
    type: Number
  },
  updatedAt: {
    type: Date
  },
  isPumpOn: {
    type: Boolean,
    default: false
  },
  physicalID: {
    type: String,
  },
  isAssigned: {
    type: Boolean,
    default: false
  },
  owner: {
    type: [Schema.Types.ObjectId],
    ref: "User"
  }
})

const Device = mongoose.model("Device", DeviceSchema);
module.exports = {
  Device,
  DeviceSchema
};