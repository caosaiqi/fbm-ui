import * as React from 'react';
import { SvgIconProps } from '@material-ui/core';
export declare const componentName: string;
export interface Props {
}
interface AiconProps extends SvgIconProps {
    /** @avocadoui/icons组件名称 */
    name?: string;
}
declare const Aicon: React.FC<AiconProps>;
export default Aicon;
