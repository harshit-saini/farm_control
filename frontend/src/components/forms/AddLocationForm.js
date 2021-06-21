import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios'
import { toast } from 'react-toastify';


const AddLocationForm = ({location}) => {

  const formik = useFormik({
    initialValues: {
      location,
    },
    onSubmit: values => {

      const submitData = async () => {
        try {
          const { data } = await axios.post("/user/location", { location: formik.values.location })
          console.log(data)
          // just a give a notification
          toast.success("Location Added");
        } catch (error) {
          console.log(error)
        }
      }

      submitData();

    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4 className="text-capitalize mb-4">Your Location</h4>
      <div className="mb-3 bg-light p-2 py-4">
        <label className="form-label mb-3" htmlFor="physicalID">your farm location is:</label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
          placeholder={location || "your location"}
          className="form-control"
        />
      </div>

      <button className="btn btn-outline-primary" type="submit">Change</button>
    </form>
  )
}

export default AddLocationForm
