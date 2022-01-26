import React from 'react';
import { FormikProvider, FormikValues, FormikProps, Form } from 'formik';

export { default as useForm } from './useForm'

const FbmForm: React.FC<FormikProps<FormikValues>> = ({ children, ...formik }) => {
  return (
    <FormikProvider value={formik}>
      <Form>
        {children}
      </Form>
    </FormikProvider>
  )
}

export default FbmForm