import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/userContext'
import styled from 'styled-components'
import AddLocationForm from '../components/forms/AddLocationForm'

const TOP = styled.div`

  & :nth-child(2){
    margin-top: -50px;
  }


`

const UserProfile = () => {

  const { user } = useContext(UserContext)
  if (user.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 p-5">
          <h1>You are not loged int. Please Login</h1>
        </div>
      </>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <TOP>
          <div style={{ maxHeight: "200px" }}>
            <img src="/images/carousel-3.jpg" alt="" style={{ objectFit: "cover", maxHeight: "200px", width: "100%" }} />
          </div>
          <div>
            <img className="img-thumbnail ms-5" src={user.profileImgURL} alt={user.name} height="100px" width="100px" />
          </div>
        </TOP>

        <div className="row">
          <div className="col-12 col-md-6 p-3">
            <div className="p-5 bg-light rounded" style={{border:"4px solid teal"}}>
              <div>Name: <h4>{user.name}</h4></div>
              <div>Unique ID: <h4>{user._id}</h4></div>
              <div>Number of Devices: <h4>{user.devices.length}</h4></div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <AddLocationForm location={user.location}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
