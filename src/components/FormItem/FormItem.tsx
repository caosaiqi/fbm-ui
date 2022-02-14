import React from 'react'
import styled from '@mui/material/styles/styled'
import { FormikErrors } from 'formik'
import {
  FieldMetaProps,
  FieldHelperProps
} from 'formik'

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

type rule = (values: any) => void | object | Promise<FormikErrors<any>>;

export type FbmFormItemProps = FbmInputProps & {
  name?: string;
  value?: any,
  label?: BaseTextFieldProps['label'];
  extra?: string;
  max?: number;
  error?: string & ErrorType
  length?: number;
  rules?: rule[]
  required?: boolean;
  labelProps?: InputLabelProps;
  inputProps?: FbmInputProps;
  InputProps?: FbmInputProps;
  inputRef?: React.Ref<any>;
  meta?: FieldMetaProps<any>;
  helpers?: FieldHelperProps<any>;
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
    top: '-2px',
    ...(variant === 'outlined' && {
      [`&.${inputLabelClasses.shrink}`]: {
        transform: 'translate(14px, -5px) scale(0.75)',
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

const FbmFormItem: React.FC<FbmFormItemProps> = React.forwardRef((props, ref) => {
  const {
    meta,
    helpers,
    clear,
    onClear,
    label,
    error,
    max,
    extra,
    length,
    labelProps: labelPropsProp,
    children: childrenProp,
    variant,
    value,
    inputProps,
    InputProps,
    inputRef,
    autoComplete,
    autoFocus = false,
    defaultValue,
    fullWidth = true,
    id,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    rows,
    endAdornment,
    readOnly,
    ...other
  } = props

  // status
  const statusError: boolean = error && !isEmpty(error)

  const labelProps = {
    variant: (variant as InputLabelProps['variant']),
    id: `${name}-label`,
    htmlFor: name,
    children: label,
    ...labelPropsProp,
  }

  const helperTextProps = {
    extra,
    error: statusError,
    id: `${name}-helper-text`,
    children: (error as ErrorType)?.isBeyond ? extra : error,
    max: max,
    length: length
  }

  const formItemProps = {
    variant: (variant as FormControlProps['variant']),
    error: statusError,
    ...(other as any),
  };

  let children = null
  
  if (childrenProp) {
    children = childrenProp
  } else if (typeof childrenProp === 'function') {
    children = childrenProp(props)
  } else {
    children = (
      <Input
        clear={clear}
        onClear={onClear}
        label={label}
        error={statusError}
        value={value}
        variant={variant}
        aria-describedby={helperTextProps.id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        multiline={multiline}
        name={name}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        id={id}
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        endAdornment={endAdornment}
        readOnly={readOnly}
        inputProps={inputProps}
        {...InputProps}
      />
    )
  }

  const childContent = {
    name,
    label,
    value,
    length,
    meta,
    helpers,
    onBlur,
    onChange,
  }

  return (
    <FormItemContext.Provider value={childContent}>
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
  variant: 'outlined',
  fullWidth: true,
}

export default FbmFormItem;
