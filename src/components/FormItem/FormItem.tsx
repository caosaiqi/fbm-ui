import React from 'react'
import styled from '@mui/material/styles/styled'
import { FormikErrors } from 'formik'
import {
  FormControl,
  InputLabel,
  FormHelperText,
  inputLabelClasses,

  FormControlProps,
  BaseTextFieldProps,
  InputLabelProps,
  FormHelperTextProps
} from '@mui/material'

import FormItemContext from './FormItemContext'
import Input, { FbmInputProps } from '../Input'
import { isEmpty } from '../../utils'

type ErrorType = {
  isBeyond?: boolean
}

export interface FbmFormItemProps {
  name?: string;
  value?: any,
  length?: number;
  extra?: string;
  max?: number;
  error?: string & ErrorType
  label?: BaseTextFieldProps['label'];
  labelProps?: InputLabelProps;
  rules?: FbmFormItemProps['validate'][]
  validate?: (values: any) => void | object | Promise<FormikErrors<any>>
  inputProps?: FbmInputProps;
  inputRef?: React.Ref<any>;
  variant?: FbmInputProps['variant']
}

export interface HelperProps extends FormHelperTextProps {
  extra?: FbmFormItemProps['extra'];
  max?: number;
  length?: number;
  error: boolean;
}

const FormItemRoot: React.FC<FormControlProps> = styled(FormControl)({
  display: 'block',
  height: '84px',
});

const LabelRoot = styled(InputLabel)(({ variant }) => {
  return {
    lineHeight: 1,
    zIndex: 1,
    ...(variant === 'outlined' && {
      [`&.${inputLabelClasses.shrink}`]: {
        transform: 'translate(14px, -7px) scale(0.75)',
      }
    })
  }
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

const FbmFormItem: React.FC<FbmFormItemProps> = React.forwardRef((inProps, ref) => {
  const {
    name,
    label,
    error,
    max,
    extra,
    length,

    variant,
    value,
    inputProps,
    inputRef,
    children: childrenProp,
  } = inProps

  // status
  const statusError: boolean = !isEmpty(error)

  const labelProps = {
    variant: (variant as InputLabelProps['variant']),
    id: `${name}-label`,
    htmlFor: name,
    children: label,
  }

  const helperTextProps = {
    extra,
    error: statusError,
    id: `${name}-helper-text`,
    children: error?.isBeyond ? extra : error,
    max: max,
    length: length
  }

  const formItemProps = {
    variant: (variant as FormControlProps['variant']),
    error: statusError,
  };

  let children = childrenProp
  if (childrenProp != null) {
    children = childrenProp
  } else if (typeof childrenProp === 'function') {
    children = childrenProp(inProps)
  } else {
    children = (
      <Input
        value={value}
        variant={variant}
        inputRef={inputRef}
        {...inputProps}
      />
    )
  }

  return (
    <FormItemContext.Provider value={inProps}>
      <FormItemRoot {...formItemProps}>
        <Label {...labelProps} />
        {children}
        <Helper {...helperTextProps} />
      </FormItemRoot>
    </FormItemContext.Provider>
  )
})

FbmFormItem.defaultProps = {
  length: 0,
  variant: 'outlined'
}

export default FbmFormItem;
