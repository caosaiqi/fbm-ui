import React from 'react'
import styled from '@mui/material/styles/styled'
import { useFormikContext } from 'formik'
import {
  FormControl,
  InputLabel,
  FormHelperText,

  OutlinedInputProps,
  BaseTextFieldProps,
  InputLabelProps,
  FormHelperTextProps
} from '@mui/material'


import FormItemContext from './FormItemContext'
import Input from '../Input'

interface FbmFormItemProps {
  name?: BaseTextFieldProps['name'];

  label?: BaseTextFieldProps['label'];
  labelProps: InputLabelProps;
 
  helperText?: BaseTextFieldProps['helperText'];
  helperTextProps?: FormHelperTextProps;

  inputProps?: OutlinedInputProps;
}


const FormItemRoot = styled(FormControl)({});

const LabelRoot = styled(InputLabel)({});

const Label: React.FC<InputLabelProps> = (props) => {
  const { children, ...labelProps } = props
  if (!children) return null
  return (
    <LabelRoot {...labelProps}>
      {children}
    </LabelRoot>
  )
}

const HelperText: React.FC<FormHelperTextProps> = (props) => {
  const { children, ...helperTextProps } = props
  if (!children) return null
  return (
    <FormHelperText {...helperTextProps}>
      {children}
    </FormHelperText>
  )
}

const FbmFormItem: React.FC<FbmFormItemProps> = React.forwardRef(({
  name,
  label,
  children,
  helperText,
  inputProps
}, ref) => {
  const formItemValues: any = {
    label,
    name,
  }
  const formik = useFormikContext();
  if (formik) {
    const { getFieldMeta, getFieldProps } = formik
    const fieldProps = getFieldProps({ name })
    const fieldMeta = getFieldMeta(name)

    Object.assign(formItemValues, fieldMeta, fieldProps)
  }

  const labelProps = {
    id: `${name}-label`,
    htmlFor: name,
    children: label,
  }

  const errorText = (helperText || helperText === null) || formItemValues.error
  const helperTextProps = {
    id: `${name}-helper-text`,
    children: errorText
  }

  const formItemProps = {
    error: !!errorText
  }

  let childrenNode = children
  if (!childrenNode) {
    childrenNode = <Input {...inputProps} />
  }

  return (
    <FormItemContext.Provider value={formItemValues}>
      <FormItemRoot {...formItemProps}>
        <Label {...labelProps} />

        {childrenNode}

        <HelperText {...helperTextProps} />
      </FormItemRoot>
    </FormItemContext.Provider>
  )
})

FbmFormItem.defaultProps = {

}

export default FbmFormItem;
