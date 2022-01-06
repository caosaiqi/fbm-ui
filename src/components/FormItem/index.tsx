import React from 'react'

import FormItem, { FbmFormItemProps } from './FormItem'
import { FbmInputProps} from '../Input'
import useFormItem from './useFormItem'

const FormItemIndex: React.FC<FbmFormItemProps & FbmInputProps> = ({
  label,
  clear,
  name,
  value,
  max,
  extra,
  rules,
  validate,
  children,
  inputProps = {}
}) => {
  const props = useFormItem({
    label,
    name,
    value,
    max,
    rules,
    validate,
    children,
    extra,
  })

  return (
    <FormItem
      {...props}
      inputProps={{
        clear,
        ...inputProps
      }}
    />
  )
}

export default FormItemIndex