import React from 'react'

import FormItem, { FbmFormItemProps } from '../FormItem/FormItem'
import { FbmInputProps } from '../Input'
import useTextField from './useTextField'
import { isFunction } from '../../utils'

const FbmTextField: React.FC<FbmFormItemProps & FbmInputProps> = ({
  name,
  label,
  value,
  max,
  rules,
  validate,
  onError,
  ...inputProps
}) => {

  const props = useTextField({
    label,
    name,
    value,
    max,
    rules,
    validate,
    onError,
  })

  return (
    <FormItem
      {...props}
      inputProps={{
        ...inputProps,
        onChange: (event) => {
          if (isFunction(inputProps.onChange)) {
            inputProps.onChange(event)
          }
          props.handleChange(event)
        }
      }}
    />
  )
}

export default FbmTextField