import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

interface FbmIconButtonProps extends IconButtonProps {}

const FbmIconButtonRoot = styled(IconButton)({
  boxShadow: 'none',
})

const FbmIconButton: React.FC<FbmIconButtonProps> = React.forwardRef((props, ref) => {
  return (
    <FbmIconButtonRoot
      {...props}
      ref={ref}
    />
  )
})

export default FbmIconButton