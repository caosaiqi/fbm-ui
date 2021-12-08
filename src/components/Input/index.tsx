import * as React from 'react';
import { TextField, OutlinedTextFieldProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import { useFormikContext } from 'formik'
import useFormikFieldProps from '../hooks/useFormikFieldProps'

export const componentName: string = 'Input'

type SizeMap = 'small' | 'large';

type Props = {
  size: SizeMap;
  name?: string;
  label?: string;
}

export type FbmInputProps =  {
  size: SizeMap;
  name?: string;
  label?: string;
} | OutlinedTextFieldProps

const InputRoot: React.FC<FbmInputProps> = styled(TextField, {
  name: 'Input',
  slot: 'Root',
})(({ size }) => {
  const sizes = {
    small: 36,
    large: 48,
  }
  const helperTextHeight = 18
  return {
    height: sizes[size] + helperTextHeight,
    marginBottom: 8,
  }
})

const FbmInput: React.FC<FbmInputProps> = (inProps) => {
  const props = useFormikFieldProps(inProps)
  console.log(props, '------')
  return <InputRoot  {...props} />
}

FbmInput.defaultProps = {
  size: 'large',
}

export default FbmInput

