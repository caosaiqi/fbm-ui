import React from 'react'

import FormItem, { FbmFormItemProps } from './FormItem'
import { FbmInputProps } from '../Input'
import useFormItem from './useFormItem'
import { isEmpty } from '../../utils'

const FormItemIndex: React.FC<FbmFormItemProps & FbmInputProps> = ({
  name: nameProp,
  value: valueProp,
  label: labelProp,
  rules: rulesProp,
  clear,
  extra,
  max,
  required,
  children,
  autoFocus,
  inputProps,
  InputProps,
  ...otherProps
}) => {

  let label = labelProp
  if (required && (label && typeof label === 'string' && !label.endsWith('*'))) {
    label = `${label}*`
  }

  let rules = rulesProp
  if (required) {
    const requiredRule = ([{ required: true }] as any)
    if (isEmpty(rules)) {
      rules = requiredRule
    } else {
      const { required } = (rules[0] as any)
      if (required === undefined) {
        rules = requiredRule.concat(rules)
      }
    }
  }

  const {
    name,
    value,
    length, //chineseLength
    meta,
    helpers,
    onChange,
    onBlur,
  } = useFormItem({
    name: nameProp,
    value: valueProp,
    max,
    rules,
    label,
  })

  let errorMsg: string = undefined
  if (meta.touched) {
    errorMsg = meta.error
  }

  return (
    <FormItem
      name={name}
      value={value}
      label={label}
      length={length}
      max={max}
      extra={extra}
      error={(errorMsg as unknown as FbmFormItemProps['error'])}
      meta={meta}
      helpers={helpers}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      inputProps={{
        clear,
        ...inputProps
      }}
      {...InputProps}
      {...otherProps}
    >
      {children}
    </FormItem>
  )
}

export default FormItemIndex