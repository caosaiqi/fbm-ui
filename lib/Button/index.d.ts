import * as React from 'react';
import { ButtonProps } from '@material-ui/core';
export declare const componentName: string;
export interface AbuttonProps extends ButtonProps {
    loading?: boolean;
}
declare const Abutton: React.FC<AbuttonProps>;
export default Abutton;
