import * as React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import { useFormikContext} from 'formik'

export const componentName: string = 'Ainput'

const InputRoot = styled(TextField, {
  name: 'Ainput',
  slot: 'Root',
})(({ theme, disabled }) => ({
  ...(disabled && {
    backgroundColor: theme.palette.action.disabledBackground,
  }),
  height: '65px',
  marginBottom: '9px',
}))


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
  }

  if (fieldMeta.error) {
    props.helperText = fieldMeta.error
    props.error = true
  }

  return props
}

const Ainput: React.FC<TextFieldProps> = (inProps) => {
  const props =  useInputProps(inProps)
  return <InputRoot {...props} />
}


export default Ainput

