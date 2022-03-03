import * as React from 'react';
import styled from '@mui/material/styles/styled'
import {
  Input,
  InputProps,
  inputClasses,
} from '@mui/material'

export interface FbmStandardProps extends InputProps {}

const StandardInput = styled(Input)(({ theme, color }) => {
  return {
    backgroundColor: '#FFF',
    [`&:hover:not(.${inputClasses.disabled}):before`]: {
      borderBottom: `1px solid rgba(0,0,0,0.26)`,
    },
    '&:after': {
      borderBottom: `1px solid ${theme.palette[color].main}`,
    },
    '&:before': {
      borderBottom: `1px solid rgba(0,0,0,0.08)`,
    },
  }
})

const FbmStandard: React.FC<FbmStandardProps> = React.forwardRef((props, ref) => {
  return (
    <StandardInput ref={ref} {...props} />
  )
})

FbmStandard.defaultProps = {
  color: 'primary',
}

export default FbmStandard

