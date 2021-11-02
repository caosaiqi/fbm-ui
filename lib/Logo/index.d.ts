import * as React from 'react';
import { ImagePropos } from '../Image';
export declare const componentName: string;
export interface AlogoProps extends ImagePropos {
    logo?: string;
    link?: string;
    name?: string;
    describe?: string;
}
declare const Alogo: React.FC<AlogoProps>;
export default Alogo;
