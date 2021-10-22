import * as React from 'react';
import { Box, BoxProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

export interface MaskProps extends BoxProps {
}

const MaskRoot: React.FC<MaskProps> = styled(Box, {
  name: 'Amask',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({}))

const Amask: React.FC<MaskProps> = ({
  children,
  ...otherProps
}) => (
  <MaskRoot {...otherProps}>
    {children}
  </MaskRoot>
)


export default Amask
