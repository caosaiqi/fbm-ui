import * as React from 'react';
import { Box, Typography } from '@material-ui/core'

import Image, { ImagePropos } from '../Image';
import styles from './styles'

export interface LogoPropos extends ImagePropos {
    logo?: string,
    link?: string,
    name?: string,
    describe?: string,
}

const Logo: React.FC<LogoPropos> = ({
    logo,
    describe,
    height,
    width,
}) => (
    <Box sx={styles.logo}>
        <Image
            src={logo}
            width={width}
            height={height}
        />
        <Typography className="describe">
            {describe}
        </Typography>
    </Box>
)

Logo.defaultProps = {
    logo: 'http://public-static-assets.oss-cn-beijing.aliyuncs.com/img/hr_logo.png',
    describe: '方便面面试',
    width: 32,
    height: 32,
}

export default Logo
