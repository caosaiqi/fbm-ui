import React from 'react'

import FormItem, { FbmFormItemProps } from './FormItem'
import { FbmInputProps } from '../Input'
import useFormItem from './useFormItem'

const FormItemIndex: React.FC<FbmFormItemProps & FbmInputProps> = ({
  label,
  clear,
  max,
  extra,
  rules,
  name,
  value,
  inputProps,
}) => {

  const {
    meta,
    helpers,
    ...field
  } = useFormItem({
    value,
    max,
    rules,
    name,
  })

  const props = {
    meta,
    helpers,
    label,
    max,
    extra,
    name,
    inputProps: {
      clear,
      ...inputProps,
    },
    ...field,
    error: meta?.error
  }

  return (
    <FormItem {...props} />
  )
}

export default FormItemIndex