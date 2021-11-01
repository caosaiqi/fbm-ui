import * as React from 'react';
export interface ImagePropos {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}
declare const Image: React.FC<ImagePropos>;
export default Image;
