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
  const formikItem = useFormItem({
    value,
    max,
    rules,
    name,
  })

  const {
    meta,
    helpers,
    ...field
  } = formikItem

  const props = {
    meta: formikItem.meta,
    helpers: formikItem.helpers,
    label,
    max,
    extra,
    name,
    inputProps: {
      clear,
      ...inputProps,
    },
    ...field,
    error: (meta?.error as never)
  }

  return (
    <FormItem {...props} />
  )
}

export default FormItemIndex