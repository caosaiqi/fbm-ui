import * as React from 'react';
import { Formik, Form, FormikConfig } from 'formik';

import Abox from '../Box'

export const componentName: string = 'Aform'

interface FormProps<Values = {}> extends FormikConfig<Values> {
  loading?: boolean;
}

const Aform: React.FC<FormProps> = (props) => {
  const { loading, children, ...otherProps } = props;
  return (
    <Abox loading={loading}>
      <Formik {...otherProps}>
        <Form>
          {children}
        </Form>
      </Formik>
    </Abox>
  )
}

export default Aform