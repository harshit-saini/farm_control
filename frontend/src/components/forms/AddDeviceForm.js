import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios'
import { toast } from 'react-toastify';


const AddDeviceForm = () => {

  const formik = useFormik({
    initialValues: {
      physicalID: "",
    },
    onSubmit: values => {

      const submitData = async () => {
        try {
          const { data } = await axios.post("/device", { physicalID: values.physicalID })
          console.log(data)
          // just a give a notification
          toast.success("Device Registered");
        } catch (error) {
          console.log(error)
        }
      }

      submitData();

    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4 className="text-capitalize">From to add a device</h4>
      <div className="mb-3 bg-light p-2">
        <label className="form-label" htmlFor="physicalID">Physical ID</label>
        <input
          id="physicalID"
          name="physicalID"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.physicalID}
          placeholder="Please enter the physical ID of the Device"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default AddDeviceForm
