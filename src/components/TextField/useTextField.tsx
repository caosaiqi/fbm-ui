import React from 'react'

import validate from '../FormItem/validate'
import { isFunction } from '../../utils'

export default function useTextField(cloneProps) {
  const { value, onError } = cloneProps

  const [error, setError] = React.useState<string>()

  if (value !== undefined) {
    Object.assign(cloneProps, { value })
  }

  const validateFn = React.useCallback(async (value) => {
    const error = await validate(value, cloneProps)
    return error
  }, [])


  Object.assign(cloneProps, {
    error: error,
    handleChange: async (event) => {
      const value = event?.target.value
      const errorMsg = await validateFn(value)
      setError(() => {
        if (errorMsg !== error) {
          if (isFunction(onError)) {
            onError(errorMsg)
          }
          return errorMsg
        }
        return undefined
      })
    }
  })

  return cloneProps
}
