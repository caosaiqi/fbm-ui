import React from 'react'
import styled from '@mui/material/styles/styled'
import { FormikErrors } from 'formik'
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
import useFormItem from './useFormItem'

interface FbmFormItemProps {
  value: any, 
  name?: BaseTextFieldProps['name'];
  label?: BaseTextFieldProps['label'];
  labelProps?: InputLabelProps;
  helperText?: BaseTextFieldProps['helperText'];
  extra?: string;
  helperTextProps?: FormHelperTextProps;
  inputProps?: OutlinedInputProps;
  max?: number;
  rules?: FbmFormItemProps['validate'][]
  validate: (values: any) => void | object | Promise<FormikErrors<any>>
}

interface HelperProps extends FormHelperTextProps {
  extra?: FbmFormItemProps['extra'];
  max?: number;
  length?: number;
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

const HelperTextRoot = styled(FormHelperText)({
  display: 'flex',
  alignItems: 'center',
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
  const { children: childrenProp, extra, length, max, ...helperTextProps } = props

  let children = childrenProp
  if (!children) {
    children = extra
  }

  return (
    <HelperTextRoot {...helperTextProps}>
      <span style={{ flex: 1 }}>
        {children || extra}
      </span>
      {
        (max && max > 0) && (
          <span>
            {length}/{max}
          </span>
        )
      }
    </HelperTextRoot>
  )
}



const FbmFormItem: React.FC<FbmFormItemProps> = React.forwardRef(({
  value,
  name,
  label,
  max,
  helperText,
  extra,
  inputProps,
  rules,
  validate: validateFn,
  children: childrenProp,
  ...otherInputProps
}, ref) => {

  const formItem = useFormItem({
    label,
    name,
    extra,
    value,
    rules,
    max,
    validateFn,
    childrenProp
  })

  const valueLength = formItem?.value?.length || 0

  // status
  const statusError: boolean = !isEmpty(formItem.error)

  const labelProps = {
    id: `${name}-label`,
    htmlFor: name,
    children: label,
  }

  const helperTextProps = {
    extra,
    error: statusError,
    id: `${name}-helper-text`,
    children: helperText || formItem.error,
    max: max,
    length: valueLength
  }

  const formItemProps = {
    error: statusError
  }

  let children = childrenProp
  if (childrenProp != null) {
    children = childrenProp
  } else if (typeof childrenProp === 'function') {
    children = childrenProp(formItem)
  } else {
    children = <Input value={value} {...otherInputProps} {...inputProps}/>
  }

  return (
    <FormItemContext.Provider value={formItem}>
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
