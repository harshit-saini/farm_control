import React from 'react'

const DeviceCard = ({ _id, physicalID, isAssigned }) => {
  return (
    <div className="card p-3 bg-light w-100 mb-3">
      <div className="card-title fs-5">ID: {_id}</div>
      <div className="card-body">
        <p>PHYSICAL ID: {physicalID}</p>
        <p>ASSIGNED : {isAssigned ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

export default DeviceCard
