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
import { isEmpty } from '../../utils'

interface FbmFormItemProps {
  name?: BaseTextFieldProps['name'];
  label?: BaseTextFieldProps['label'];
  labelProps?: InputLabelProps;
  helperText?: BaseTextFieldProps['helperText'];
  extra?: string;
  helperTextProps?: FormHelperTextProps;
  inputProps?: OutlinedInputProps;
}

interface HelperProps extends FormHelperTextProps {
  extra?: FbmFormItemProps['extra']
  error: boolean;
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

const Helper: React.FC<HelperProps> = (props) => {
  const { children: childrenProp , extra, ...helperTextProps } = props
 
  let children = childrenProp
  if (!children) {
    children = extra
  }

  if (!children) return null
  
  return (
    <FormHelperText {...helperTextProps}>
      {children || extra}
    </FormHelperText>
  )
}

const FbmFormItem: React.FC<FbmFormItemProps> = React.forwardRef(({
  name,
  label,
  helperText,
  extra,
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

  // status
  const statusError:boolean = !isEmpty(formItemValues.error)

  const labelProps = {
    id: `${name}-label`,
    htmlFor: name,
    children: label,
  }
  
  const helperTextProps = {
    extra,
    error: statusError,
    id: `${name}-helper-text`,
    children:  helperText || formItemValues.error
  }

  const formItemProps = {
    error: statusError
  }

  let children = childrenProp
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

        <Helper {...helperTextProps} />
      </FormItemRoot>
    </FormItemContext.Provider>
  )
})

FbmFormItem.defaultProps = {

}

export default FbmFormItem;
