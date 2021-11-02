import * as React from 'react';
import { AvatarProps } from '@material-ui/core';
export declare const componentName: string;
declare type SizeType = 'small' | 'middle' | 'large';
export interface AavatarPropos extends AvatarProps {
    /** 尺寸 */
    size?: SizeType | string;
    /** 是否为禁用状态 */
    disabled?: boolean;
}
declare const Aavatar: React.FC<AavatarPropos>;
export default Aavatar;
