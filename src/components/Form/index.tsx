import * as React from 'react';
import { Formik, Form, FormikConfig } from 'formik';

import Box from '../Box'

export const componentName: string = 'Form'

interface FbmFormProps<Values = {}> extends FormikConfig<Values> {
  loading?: boolean;
}

const FbmForm: React.FC<FbmFormProps> = (props) => {
  const { loading, children, ...otherProps } = props;
  return (
    <Box loading={loading}>
      <Formik {...otherProps}>
        <Form>
          {children}
        </Form>
      </Formik>
    </Box>
  )
}

export default FbmForm