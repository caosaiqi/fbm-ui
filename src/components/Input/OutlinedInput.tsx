import * as React from 'react';
import {
  OutlinedInput,
  OutlinedInputProps,
  outlinedInputClasses,
  IconButton,
} from '@mui/material'
import styled from '@mui/material/styles/styled'

import useFormItemContext from '../FormItem/useFormItemContext';
import { CloseIcon } from '../icons'
import { isFunction } from '../../utils'

export interface FbmInputProps extends OutlinedInputProps {
  clear?: boolean;
  onClear?: () => void;
}

const InputRoot = styled(OutlinedInput)(({ theme }) => {
  return {
    backgroundColor: '#FFF',
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

const EndButton = styled(IconButton)({
  padding: 3,
  '& svg': {
    fontSize: '16px !important'
  }
})

const FbmInput: React.FC<FbmInputProps> = React.forwardRef((inProps, ref) => {
  const { clear, onClear, ...otherProps } = inProps

  const {
    value,
    onChange,
    name,
    label,
    statusError,
    setValue,
    initialValue,
  } = useFormItemContext()

  const handleClear = (e) => {
    if (isFunction(onClear)) {
      onClear()
    }
    if (setValue) {
      setValue(initialValue)
    }
  }

  const props = {
    name,
    value,
    label,
    onChange,
    error: statusError,
    ...((value && (clear || isFunction(onClear))) && {
      endAdornment: (
        <EndButton size='small' onClick={handleClear}>
          <CloseIcon />
        </EndButton>
      )
    }),
    ...otherProps
  }

  return (
    <InputRoot
      inputRef={ref}
      {...props}
    />
  )
})

FbmInput.defaultProps = {
  fullWidth: true,
}

export default FbmInput

