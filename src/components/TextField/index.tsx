import React from 'react'

import FormItem, { FbmFormItemProps } from '../FormItem/FormItem'
import useTextField from './useTextField'

const FbmTextField: React.FC<FbmFormItemProps> = ({
  name,
  value,
  max,
  rules,
  validate,
  children,
  ...InputProps
}) => {
  const props = useTextField(
    {
      name,
      value,
      max,
      rules,
      validate,
      children,
      ...InputProps
    }
  )
  return <FormItem {...props} />
}

export default FbmTextField