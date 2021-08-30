import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const FormTwo = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Sorry, this is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className='container'>
      <div className='col-md-12 mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='firstname'>First name</label>
          <input
            className='form-control'
            type='text'
            name='firstname'
            {...formik.getFieldProps('firstname')}
            /* onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstname}*/
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <span>{formik.errors.firstname}</span>
          ) : null}
          <hr className='mb-4' />
          <button className='btn btn-primary btn-lg btn-block' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
