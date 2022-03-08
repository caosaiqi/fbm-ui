import React from 'react';
import {
  IconButton,
} from '@mui/material'
import styled from '@mui/material/styles/styled'

import Outlined, { FbmOutlinedProps } from './Outlined'
import Standard, { FbmStandardProps } from './Standard'
import useInputProps from './useInputProps'
import { CloseIcon } from '../icons'
import { isFunction } from '../../utils'

const variantComponent = {
  standard: Standard,
  // filled: FilledInput,
  outlined: Outlined,
};

export interface BaseInputProps {
  clear?: boolean;
  onClear?: () => void;
  variant?: string;
}

export type FbmInputProps = BaseInputProps & FbmOutlinedProps & FbmStandardProps

const EndButton = styled(IconButton)({
  padding: 3,
  '& svg': {
    fontSize: '16px !important'
  }
})

const FbmInput: React.FC<FbmInputProps> = React.forwardRef((props, ref) => {
  const {
    value,
    variant,
    clear,
    onClear,
    helpers,
    meta,
    ...InputProps
  } = useInputProps(props)

  const handleClear = (e) => {
    e.stopPropagation()
    if (isFunction(onClear)) {
      onClear()
    }
    if (helpers?.setValue) {
      const setValue = helpers?.setValue
      setValue(meta?.initialValue)
    }
  }

  const InputComponent = variantComponent[variant]
  const ClearEndAdornment = () => {
    if (value && (clear || onClear)) {
      return (
        <EndButton size='small' onClick={handleClear}>
          <CloseIcon />
        </EndButton>
      )
    }
    return null
  }

  return (
    <InputComponent
      ref={ref}
      value={value}
      endAdornment={<ClearEndAdornment />}
      {...InputProps}
    />
  )
})

FbmInput.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
}

export default FbmInput

