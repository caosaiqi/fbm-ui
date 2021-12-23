import React from 'react'
import styled from '@mui/material/styles/styled'
import { useFormikContext } from 'formik'
import {
  FormControl,
  InputLabel,
  FormHelperText,
  inputLabelClasses,

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
  labelProps?: InputLabelProps;
 
  helperText?: BaseTextFieldProps['helperText'];
  helperTextProps?: FormHelperTextProps;

  inputProps?: OutlinedInputProps;
}


const FormItemRoot = styled(FormControl)({
  display: 'block',
  height: '84px',
});

const LabelRoot = styled(InputLabel)({
  lineHeight: 1,
  [`&.${inputLabelClasses.shrink}`]: {
    transform: 'translate(14px, -7px) scale(0.75)',
  },
});

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
  helperText,
  inputProps,
  children: childrenProp,
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

  let children = null
  if (childrenProp != null) {
    children = childrenProp
  } else if (typeof childrenProp === 'function') {
    children = childrenProp(formItemValues)
  } else {
    children = <Input {...inputProps} />
  }

  return (
    <FormItemContext.Provider value={formItemValues}>
      <FormItemRoot {...formItemProps}>
        <Label {...labelProps} />

        {children}

        <HelperText {...helperTextProps} />
      </FormItemRoot>
    </FormItemContext.Provider>
  )
})

FbmFormItem.defaultProps = {

}

export default FbmFormItem;
