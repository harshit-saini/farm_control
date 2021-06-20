import React, { useState } from 'react'
import EditDeviceFrom from '../components/forms/EditDeviceForm'

const DeviceCardForFarmer = ({ _id, name, moistureLevel, updatedAt, isPumpOn }) => {

  console.log(updatedAt)

  const [isdeviceEditing, setIsDeviceEditing] = useState(false);

  const handleEditDeviceForm = () => {
    setIsDeviceEditing(isdeviceEditing => !isdeviceEditing)
  }

  return (
    <div className="card">
      <div className="card-header"><span className="fw-bold">Device ID: </span>{_id}</div>
      <div className="card-body">
        <p><span className="fst-italic me-2">Device Name: </span>{name || "Give a name to this device"}</p>
        <p><span className="fst-italic me-2">Moisture Level: </span>{moistureLevel || "no readings yet"}</p>
        <p><span className="fst-italic me-2">Updated At: </span>{updatedAt || "waiting for update"}</p>
        <p><span className="fst-italic me-2">Is Pump On: </span>{isPumpOn ? "YES" : "NO"}</p>
      </div>
      <button className="btn btn-secondary" onClick={handleEditDeviceForm}>Edit Device</button>
      <div className="card-footer"></div>
      {
        isdeviceEditing &&
        <EditDeviceFrom name={name} isPumpOn={isPumpOn} _id={_id} />
      }
    </div>
  )
}

export default DeviceCardForFarmer
