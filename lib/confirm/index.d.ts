import * as React from 'react';
import { AdialogProps } from '../Dialog';
export declare const componentName: string;
export interface AconfirmProps extends AdialogProps {
    content?: string | React.ReactNode;
}
declare const confirm: (props: AconfirmProps) => void;
export default confirm;
