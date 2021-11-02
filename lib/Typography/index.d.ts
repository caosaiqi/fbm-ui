import * as React from 'react';
import { TypographyProps } from '@material-ui/core';
declare type ColorTypeMap = 'error' | 'warning' | 'success' | 'info' | 'black' | 'white' | 'secondary' | 'disabled';
declare type WeightTypeMap = 'light' | 'regular' | 'medium' | 'bold';
export interface AuiTypographyProps extends TypographyProps {
    children?: React.ReactNode;
    /** 字体颜色 */
    color?: ColorTypeMap | string;
    /** 字体色重 */
    weight?: WeightTypeMap | string;
}
declare const AuiTypography: React.FC<AuiTypographyProps>;
export default AuiTypography;
