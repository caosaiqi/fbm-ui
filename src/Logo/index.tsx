import * as React from 'react';
import { Box, Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'
import useThemeProps from '@mui/material/styles/useThemeProps'

import Image, { ImagePropos } from '../Image';

export const componentName: string = 'Alogo'

export interface AlogoProps extends ImagePropos {
  logo?: string,
  link?: string,
  name?: string,
  describe?: string,
}

const AlogoRoot: React.FC<AlogoProps> = styled(Box, {
  name: 'Alogo',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const Alogo: React.FC<AlogoProps> = (inProps) => {
  const {
    logo,
    describe,
    height,
    width,
  } = useThemeProps({ props: inProps, name: componentName })

  return (
    <AlogoRoot>
      <Image
        src={logo}
        width={width}
        height={height}
      />
      <Typography className="describe">
        {describe}
      </Typography>
    </AlogoRoot>
  )
}

export default Alogo
