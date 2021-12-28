import * as React from 'react';
import { OutlinedInput, OutlinedInputProps, outlinedInputClasses } from '@mui/material'
import styled from '@mui/material/styles/styled'

import useFormItem from '../FormItem/useFormItem'

const InputRoot = styled(OutlinedInput)(({ theme }) => {
  return {
    [`.${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.08)',
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.26)',
    },

    [`& .${outlinedInputClasses.input}`]: {
      padding: '12px'
    },

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
  }
})


const FbmInput: React.FC<OutlinedInputProps> = (inProps) => {
  const {
    value,
    onChange,
    name,
    error,
    label
  } = useFormItem()

  const props = {
    name,
    value,
    label,
    onChange,
    error: !!error,
    ...inProps
  }
  return <InputRoot {...props} />
}


FbmInput.defaultProps = {
  fullWidth: true,
}


export default FbmInput

