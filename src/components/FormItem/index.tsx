import React from 'react'

import FormItem, { FbmFormItemProps } from './FormItem'
import useFormItem from './useFormItem'


const FormItemIndex: React.FC<FbmFormItemProps> = ({
  name,
  value,
  max,
  extra,
  rules,
  validate,
  children,
  ...inputProps
}) => {
  const props = useFormItem({
    name,
    value,
    max,
    rules,
    validate,
    children,
    extra,
  })

  console.log(props)

  return (
    <FormItem
      {...props}
    />
  )
}

export default FormItemIndex