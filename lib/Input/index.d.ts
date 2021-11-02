import * as React from 'react';
export declare const componentName: string;
declare type SizeMap = 'small' | 'large';
export interface InputProps {
    isFormik?: boolean;
    size?: SizeMap;
}
declare const Ainput: React.FC<InputProps>;
export default Ainput;
