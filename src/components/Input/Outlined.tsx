import * as React from 'react';
import styled from '@mui/material/styles/styled'
import {
  OutlinedInput,
  OutlinedInputProps,
  outlinedInputClasses,
} from '@mui/material'

export interface FbmOutlinedProps extends OutlinedInputProps { }

const FbmOutlinedInput = styled(OutlinedInput)(({ theme, startAdornment, endAdornment, size }) => {
  return {
    backgroundColor: '#FFF',
    [`.${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.08)',
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.26)',
    },
    [`& .${outlinedInputClasses.input}`]: {
      padding: '12px 12px 13px 12px'
    },
    ...(size === 'small' &&  {
      [`& .${outlinedInputClasses.input}`]: {
        padding: '6px 12px 7px 12px'
      },
    }), 
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.error.main,
    },
    [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0, 0, 0, 0.08)',
      backgroundColor: theme.palette.action.disabledBackground
    },
    ...(startAdornment && {
      paddingLeft: 4,
      [`& .${outlinedInputClasses.input}`]: {
        padding: '10px 12px 11px 4px'
      },
    }),
  }
})

const FbmInput: React.FC<FbmOutlinedProps> = React.forwardRef((props, ref) => {
  return (
    <FbmOutlinedInput ref={ref} {...props} />
  )
})

export default FbmInput
