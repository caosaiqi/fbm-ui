import React from 'react'

import getValueLength from '../../utils/getValueLength'
import validate from '../FormItem/validate'
import { isFunction } from '../../utils'

export default function useTextField(cloneProps) {
  const { name, max, value: valueProp, onChange: onChangeProp } = cloneProps
  const [error, setError] = React.useState(undefined)

  const validateFn = React.useCallback(async (value = valueProp) => {
    const newErrorMsg = await validate(value, cloneProps)
    setError(newErrorMsg)
    return newErrorMsg
  }, [name])

  const handleChange = React.useCallback((event) => {
    if (isFunction(onChangeProp)) {
      onChangeProp(event)
    }
    const value = event?.target?.value
    validateFn(value)
  }, [name])

  Object.assign(cloneProps, {
    error: error,
    onChange: handleChange,
    handleValidate: validateFn,
    ...getValueLength({ value: valueProp, max })
  })

  return cloneProps
}
