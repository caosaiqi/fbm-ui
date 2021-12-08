import React from 'react';
import { FormikProvider } from 'formik';

const FbmForm: React.FC = ({ formik, children }: any) => {
  return (
    <FormikProvider value={formik}>
      {children}
    </FormikProvider>
  )
}

export default FbmForm