import * as React from 'react';
import { FormikConfig } from 'formik';
export declare const componentName: string;
interface FormProps<Values = {}> extends FormikConfig<Values> {
    loading?: boolean;
}
declare const Aform: React.FC<FormProps>;
export default Aform;
