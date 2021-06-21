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
        </div>
      </div>
    </div>
  )
}

export default index
