import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/userContext'
import DeviceCard from '../components/DeviceCard'

const MyFarm = () => {

  const { user } = useContext(UserContext)

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="border-secondary p-4 bg-light mt-4 vertical-middle my-3"><h6 className="text-center fs-3">This is the place where you can control all the devices of your farm.</h6></div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {user.devices &&
            user.devices.map(device => (
              <div className="col">
                <DeviceCard {...device} key={device._id} />
              </div>
            ))
          }
        </div>


      </div>
    </div>
  )
}

export default MyFarm