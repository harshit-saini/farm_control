import React, { useState } from 'react'
import AssignDeviceForm from './forms/AssignDeviceForm';

const FarmerCard = ({ _id, name, profileImgURL, location, devices }) => {


  const [isAssigning, setIsAssigning] = useState(false);

  const handleAssignBtn = () => {
    setIsAssigning(isAssigning => !isAssigning);
  }
  console.log(isAssigning)

  return (
    <div className="card p-4">
      <div className="row">
        <div className="col-2">
          <img className="img-thumbnail" src={profileImgURL} alt="" />
        </div>
        <div className="col-10">
          <p className="fs-3 mb-0">{name}</p>
          <p className="text-capitalize mb-0">Location: {location ? `${location}` : "Not Provided"}</p>
          <p className="text-capitalize mb-0">Devices: {devices.length} </p>
        </div>
      </div>
      <div>
        <div className="mt-3">
          <button className="btn btn-primary me-2" onClick={handleAssignBtn}>Assign Device</button>
          {/* <button className="btn btn-primary">Show Devices</button> */}
        </div>
      </div>
      {
        isAssigning &&
        <AssignDeviceForm farmerID={_id} />
      }
    </div>
  )
}

export default FarmerCard
