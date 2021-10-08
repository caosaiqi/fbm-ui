import * as React from 'react';
import { Box } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

export interface MaskProps {
  zIndex?: number
}

const MaskRoot: React.FC<MaskProps> = styled(Box, {
  name: 'Amask',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({}))

const Amask: React.FC<MaskProps> = (props) => <MaskRoot {...props} />

export default Amask
