import * as React from 'react';
import { Box } from '@material-ui/core'

export interface ImagePropos {
    src?: string
    alt?: string,
    width?: number,
    height?: number,
}

const Image: React.FC<ImagePropos> = ({ src, alt, width }) => (
    <Box width={width}  component="img" src={src} alt={alt} />
)

Image.defaultProps = {
    src: 'http://public-static-assets.oss-cn-beijing.aliyuncs.com/img/hr_logo.png',
}

export default Image
