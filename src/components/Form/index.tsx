import React from 'react';
import { Formik, useFormikContext} from 'formik';

export const componentName: string = 'Form'

interface FbmFormProps {
  loading?: boolean;
  formik: any
}

const Form = ({
  children
}) => {
  const props = useFormikContext()
  console.log(props)
  return <form action="">

    {children}
  </form>
}

const FbmForm: React.FC<FbmFormProps> = (props) => {
  const { children, formik } = props
  return (
    <Formik>
      <Form>{children}</Form>
    </Formik>
  )
}

export default FbmForm