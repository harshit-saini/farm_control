import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

const AssignDeviceForm = ({ farmerID }) => {

  const formik = useFormik({
    initialValues: {
      deviceID: "",
    },
    onSubmit: values => {
      const assignDevice = async () => {
        const { data } = await axios.post(`/device/update/${formik.values.deviceID}`, { farmerID })

        console.log(data);
      }

      assignDevice();
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mt-5">
      <h4 className="text-capitalize">Assign a device: </h4>
      <div className="mb-3 bg-light p-2">
        <label className="form-label" htmlFor="deviceID">ID</label>
        <input
          id="deviceID"
          name="deviceID"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.deviceID}
          placeholder="Please enter the ID of the Device"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">Assign</button>
    </form>
  )
}

export default AssignDeviceForm
