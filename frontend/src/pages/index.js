import React from 'react'


import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import WeatherCard from '../components/WeatherCard'


const index = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mb-5">
        <div className="row">
          <div className="col col-12 col-md-4">
            <WeatherCard/>
          </div>
          <div className="col-12 col-md-8 p-2 px-md-5 mt-3 mt-md-0">
            <div>
              <h3 className="mb-4">About this application</h3>
              <ul className="fs-4">
                <li>Farmers can register on this application using their google account.</li>
                <li>Contact the admin if you want a device for your farm.</li>
                <li>After the device is installed in the farm, farmer can monitor the soil moisture and can control the water pump.</li>
                <li>One Farmer can have multiple devices.</li>
                <li>One device can show data to multiple Farmers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
