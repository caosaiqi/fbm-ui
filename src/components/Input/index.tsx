import * as React from 'react';
import { OutlinedInput, OutlinedInputProps, outlinedInputClasses } from '@mui/material'
import styled from '@mui/material/styles/styled'

import useFormItem from '../FormItem/useFormItem'

const InputRoot = styled(OutlinedInput)(({ theme }) => {
  return {
    '@media (hover: none)': {
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'rgba(0,0,0,0.26)',
    },

    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.error.main,
    },
    [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.action.disabled,
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


export default FbmInput

