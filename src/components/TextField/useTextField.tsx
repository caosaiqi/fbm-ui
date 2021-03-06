import React from 'react'

import getValueLength from '../../utils/getValueLength'
import validate from '../FormItem/validate'
import { isFunction } from '../../utils'

export default function useTextField(props) {
  const {
    max,
    inputProps,
    InputProps,
    error: errorProp,
    value: valueProp,
    onChange: onChangeProp,
    onBlur: onBlurProp,
    validate: validateFn,
  } = props

  const [error, setError] = React.useState(errorProp)

  const validateRules = React.useCallback(async (value = valueProp) => {
    const ruleError = await validate(value, props)
    setError(ruleError)
    return ruleError
  }, [valueProp])

  const handleChange = (event) => {
    if (isFunction(onChangeProp)) {
      onChangeProp(event)
    }
    if (isFunction(inputProps?.onChange)) {
      inputProps.onChange(event)
    }
    const value = event?.target ? event?.target?.value : event
    validateRules(value)
  }

  const handleBlur = (event) => {
    if (isFunction(onBlurProp)) {
      onBlurProp(event)
    }
    if (isFunction(inputProps?.onBlur)) {
      inputProps.onBlur(event)
    }

    const value = event?.target ? event?.target?.value : event
    validateRules(value)
  }

  const handleValidate = React.useCallback(async (value = valueProp) => {
    // onChang 验证没通过
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
      const errMsg: string = await validateFn(value, props)
      setError(errMsg)
    }
  }, [error, valueProp])

  const { length } = getValueLength({ value: valueProp, max })

  return Object.assign(props, {
    error: errorProp || error,
    length,
    setError,
    handleValidate: handleValidate,
    InputProps: {
      ...inputProps,
      ...InputProps,
      value: valueProp,
      onChange: handleChange,
      onBlur: handleBlur,
    }
  })
}
