// this is the admin page 

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import DeviceCard from '../components/DeviceCard';
import FarmerCard from '../components/FarmerCard';
import AddDeviceForm from '../components/forms/AddDeviceForm'

const Admin = () => {

  const { path, url } = useRouteMatch();


  const [allDevices, setAllDevices] = useState([]);
  const [allFarmers, setAllFarmers] = useState([]);

  useEffect(() => {

    // get all devices
    const getAllDevices = async () => {
      const { data } = await axios.get("/device");
      setAllDevices(data)
    }

    getAllDevices();

    // get all farmers 
    const getAllFarmers = async () => {
      const { data } = await axios.get("/user/all");
      setAllFarmers(data);
      console.log(allFarmers)
    }

    getAllFarmers();

  }, [])

  const filterDevices = (event) => {

    if (!event) return allDevices;
    const { target: { id } } = event
    console.log(id)
    if (id === "all") return allDevices;

    const filteredDevices = [];
    allDevices.forEach(device => {
      if (id === "assigned") {
        if (device.isAssigned === true) {
          filteredDevices.push(device);
        }
      } else {
        if (device.isAssigned === false) {
          filteredDevices.push(device);
        }
      }
    })

    console.log(filteredDevices)
    return filteredDevices;

  }

  const ShowAllDevices = () => (
    <div >
      <p className="fs-4 text-capitalize bg-light p-3 mb-4">These are all Registered devices: </p>
      {/* <div className="mb-3">
        Filter :
        <button className="btn btn-outline-primary rounded-pill ms-3 active" id="all" onClick={filterDevices}>All</button>
        <button className="btn btn-outline-primary rounded-pill ms-3" id="assigned" onClick={filterDevices}>Assigned</button>
        <button className="btn btn-outline-primary rounded-pill ms-3" id="not-assigned" onClick={filterDevices}>Not Assigned</button>
      </div> */}
      {
        filterDevices().map(device => (
          <DeviceCard {...device} />
        ))
      }
    </div>
  )

  const ShowAllFarmers = () => (
    <>
      {
        allFarmers.map(farmer => (
          <FarmerCard {...farmer} />
        ))
      }
    </>
  )

  return (
    <div>
      <div className="container mt-5">
        <Link className="p-3 bg-light d-block h1 text-decoration-none" to="/admin">Hello Admin</Link>
      </div>
      <div className="container">
        <div className="row" >
          <div className="col-12 col-md-4 ">
            <div className="border p-3 bg-light">
              <Link className="btn btn-outline-primary d-block my-3" to={`${url}/add-device`} >Add Device</Link>
              <Link className="btn btn-outline-primary d-block my-3" to={`${url}/all-devices`} >View All Devices</Link>
              <Link className="btn btn-outline-primary d-block my-3" to={`${url}/all-farmers`} >View All Farmers / Assign Device</Link>
            </div>
          </div>
          <div className="col-12 col-md-8 ">
            <Switch>
              <Route path={`${url}/add-device`}>
                <AddDeviceForm />
              </Route>
              <Route path={`${url}/all-devices`}>
                <ShowAllDevices />
              </Route>
              <Route path={`${url}/all-farmers`}>
                <ShowAllFarmers />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
