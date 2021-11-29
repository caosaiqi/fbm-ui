import React from 'react';
import { Formik, useFormikContext, FormikProvider, Form } from 'formik';

// export const componentName: string = 'Form'

// interface FbmFormProps {
//   loading?: boolean;
//   formik: any
// }

// const Form = ({
//   children
// }) => {
//   const props = useFormikContext()
//   return <form action="">

//     {children}
//   </form>
// }

const FbmForm: React.FC = ({ formik, children }: any) => {
  return (
    <FormikProvider value={formik}>
      {children}
    </FormikProvider>
  )
}

export default FbmForm