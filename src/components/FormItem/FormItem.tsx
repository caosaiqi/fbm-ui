import React from 'react'
import styled from '@mui/material/styles/styled'
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

export type RuleItemType = ((value: any, formItem: object) => void | string) | {
  type?: string;
  message?: string;
  required?: boolean;
};

export type FbmFormItemProps = {
  name?: string;
  value?: any,
  label?: BaseTextFieldProps['label'];
  extra?: string;
  max?: number;
  error?: boolean | string | ErrorType;
  length?: number;
  rules?: RuleItemType[]
  required?: boolean;
  InputLabelProps?: InputLabelProps;
  inputProps?: FbmInputProps['inputProps'];
  InputProps?: FbmInputProps;
  inputRef?: React.Ref<any>;
  meta?: FieldMetaProps<any>;
  helpers?: FieldHelperProps<any>;
} & FbmInputProps

export interface HelperProps extends FormHelperTextProps {
  extra?: FbmFormItemProps['extra'];
  max?: number;
  length?: number;
  error: boolean;
}

export interface FbmInputLabelProps extends InputLabelProps {
  size?: FbmInputProps['size']
}

const FormItemRoot: React.FC<FormControlProps> = styled(FormControl)({
  display: 'block',
  height: '84px',
});

const LabelRoot: React.FC<FbmInputLabelProps> = styled(InputLabel)(({ variant, size }) => {
  return {
    lineHeight: 1,
    zIndex: 1,
    top: '0',
    ...(variant === 'outlined' && {
      [`&.${inputLabelClasses.shrink}`]: {
        transform: 'translate(14px, -5px) scale(0.75)',
      }
    }),
    ...(variant === 'outlined' && size === 'small' && {
      top: '1px',
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
    InputLabelProps: labelPropsProp,
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
    size,
    type,
    ...other
  } = props

  // status
  const statusError: boolean = error && !isEmpty(error)

  const labelProps = {
    size,
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
        type={type}
        size={size}
        clear={clear}
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
        onClear={onClear}
        placeholder={placeholder}
        endAdornment={endAdornment}
        readOnly={readOnly}
        inputProps={inputProps}
        {...InputProps}
      />
    )
  }

  const formikValue = meta ? {
    meta,
    helpers,
    onBlur,
    onChange,
  }: {}

  // 如果调用了Form组件 则获取useFormItem 返回值，给formItem子组件用
  const childContext = {
    name,
    label,
    value,
    length,
    size,
    ...formikValue,
  }

  return (
    <FormItemContext.Provider value={childContext}>
      <FormItemRoot {...formItemProps} ref={ref}>
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
