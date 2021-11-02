import * as React from 'react';
import { AlertProps } from '@material-ui/core';
declare type AlertType = 'error' | 'warning' | 'success' | 'info';
export interface AalertProps extends AlertProps {
    /** Alert类型 可选 默认为info */
    type?: AlertType;
    /** Alert显示内容 */
    children?: React.ReactNode;
    /** 提示文案 */
    message?: React.ReactNode;
}
declare const Aalert: React.FC<AalertProps>;
export default Aalert;
