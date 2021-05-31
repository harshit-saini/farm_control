import React from 'react'

const FarmerCard = ({ name, profileImgURL, location, devices }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <img src={profileImgURL} alt="" height="70px" width="70px" />
      <p>{location}</p>
    </div>
  )
}

export default FarmerCard
