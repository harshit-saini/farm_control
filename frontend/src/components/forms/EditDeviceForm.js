// this form will be used by the farmer to edit device settings

import axios from 'axios'
import { useFormik } from 'formik'
import React, { useRef, useEffect } from 'react'

const EditDeviceForm = ({ name, isPumpOn, _id }) => {

  const formik = useFormik({
    initialValues: {
      name: name,
      isPumpOn: isPumpOn
    },
    onSubmit: values => {
      console.log(values)

      const updateDevice = async () => {
        try {
          const { data } = await axios.post(`device/edit/${_id}`, {
            name: formik.values.name,
            isPumpOn: formik.values.isPumpOn
          })
        } catch (error) {
          console.log(error)
        }
      }
      updateDevice();

      window.location.reload();
    }
  })

  const checkbox = useRef();

  useEffect(() => {
    if (formik.values.isPumpOn) {
      checkbox.current.checked = true;
    } else {
      checkbox.current.checked = false;
    }

  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="bg-light mt-3">
        <div className="mb-3 p-2">
          <label className="form-label" htmlFor="name">Device Name:</label>
          <input className="form-control" name="name" id="name" type="text" placeholder="Enter device name" value={formik.values.name} onChange={formik.handleChange} />
        </div>
        <div className="mb-3 p-2">
          <div class="form-check form-switch">
            <input ref={checkbox} class="form-check-input" type="checkbox" id="isPumpOn" value={formik.values.isPumpOn} onChange={formik.handleChange} />
            <label class="form-check-label" htmlFor="isPumpOn">Pump Status</label>
          </div>
        </div>
        <button className="btn btn-outline-primary m-2" type="submit">Change</button>
      </form>

    </div>
  )
}

export default EditDeviceForm
