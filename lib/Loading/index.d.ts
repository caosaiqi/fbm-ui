import * as React from 'react';
export declare const componentName: string;
declare type SizeType = 'small' | 'large';
declare type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
export interface AloadingProps {
    /** 尺寸 */
    size?: SizeType | number;
    /** 颜色 */
    color?: ColorType | string;
    /**  Loading提示文案 */
    desc?: React.ReactNode;
    /** 是否需要遮罩 */
    isMask?: boolean;
}
declare const ACircularProgress: React.FC<AloadingProps>;
export default ACircularProgress;
