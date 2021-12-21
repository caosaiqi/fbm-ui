import React from 'react';
import { FormikProvider, FormikConfig } from 'formik';

interface FbmForm {
 
}

const FbmForm: React.FC = ({ formik,  children}: any) => {
  return (
    <FormikProvider value={formik}>
      {children}
    </FormikProvider>
  )
}

export default FbmForm