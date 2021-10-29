import * as React from 'react';
import { TextField } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import { useFormikContext } from 'formik'

export const componentName: string = 'Ainput'

type SizeMap = 'small' | 'large';
export interface InputProps {
  isFormik?: boolean;
  size?: SizeMap
}

const InputRoot: React.FC<InputProps> = styled(TextField, {
  name: 'Ainput',
  slot: 'Root',
})(({ size, isFormik }) => {
  const sizes = {
    small: 32,
    large: 46,
  }
  const helperTextHeight = 18
  return {
    ...(isFormik && {
      height:  sizes[size] + helperTextHeight,
    }),
    marginBottom: 8,
  }
})


const useInputProps = (inProps) => {
  const formik = useFormikContext();
  if (!formik || (inProps && !inProps.name)) return inProps

  const {
    getFieldProps,
    getFieldMeta,
    // getFieldHelpers,
  } = formik

  const fieldProps = getFieldProps(inProps)
  const fieldMeta = getFieldMeta(inProps.name)
  // const fieldHelpers = getFieldHelpers(props.name)

  const props = {
    ...inProps,
    ...fieldProps,
    isFormik: true,
  }


  if (fieldMeta.error) {
    props.helperText = fieldMeta.error
    props.error = true
  }

  return props
}

const Ainput: React.FC<InputProps> = (inProps) => {
  const props = useInputProps(inProps)
  return <InputRoot {...props} />
}


Ainput.defaultProps = {
  size: 'large',
}

export default Ainput

