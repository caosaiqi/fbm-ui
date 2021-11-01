import * as React from 'react';
import { BoxProps } from '@material-ui/core';
export declare const componentName: string;
interface LoadingProps {
    /** 遮罩loading */
    loading?: boolean;
    /** Loding尺寸 */
    size?: 'large' | 'small' | number;
    /** Loading提示文案 */
    desc?: React.ReactNode;
    /** 是否需要遮罩 */
    isMask?: boolean;
}
export interface AboxProps extends BoxProps {
    /** loading */
    loading?: boolean | LoadingProps;
    /** 是否禁用 */
    disabled?: boolean;
}
declare const Abox: React.FC<AboxProps>;
export default Abox;
