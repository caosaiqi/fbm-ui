import React from 'react'

import getValueLength from '../../utils/getValueLength'
import validate from '../FormItem/validate'
import { isFunction } from '../../utils'

export default function useTextField(cloneProps) {
  const {
    name,
    max,
    error: errorProp,
    value: valueProp,
    onChange: onChangeProp,
    validate: validateFn,
  } = cloneProps

  const [error, setError] = React.useState(errorProp)

  const validateRules = React.useCallback(async (value = valueProp) => {
    const ruleError = await validate(value, cloneProps)
    setError(ruleError)
    return ruleError
  }, [valueProp])

  const handleChange = React.useCallback((event) => {
    if (isFunction(onChangeProp)) {
      onChangeProp(event)
    }
    const value = event?.target?.value
    validateRules(value)
  }, [valueProp])

  const handleValidate = React.useCallback(async (value = valueProp) => {
    // Rules验证没通过
    if (error !== undefined) return error
    // 没触发onchange，则重新调一遍ruls验证
    if (error === undefined) {
      const ruleError = await validateRules()
      if (ruleError) {
        return ruleError
      }
    }
    // rules通过才走validate验证
    if (validateFn && isFunction(validateFn)) {
      const errMsg: string = await validateFn(value, cloneProps)
      setError(errMsg)
    }
  }, [error, valueProp])

  Object.assign(cloneProps, {
    error: errorProp || error,
    setError,
    onChange: handleChange,
    handleValidate: handleValidate,
    ...getValueLength({ value: valueProp, max })
  })

  return cloneProps
}
