import React, { useCallback, useState, useEffect } from 'react'

import validate from '../FormItem/validate'

export default function useTextField(cloneProps) {
  const { value } = cloneProps

  const [error, setError] = useState<string>()

  if (value !== undefined) {
    Object.assign(cloneProps, { value })
  }

  const validateFn = useCallback(async (value) => {
    const error = await validate(value, cloneProps)
    return error
  }, [])

  Object.assign(cloneProps, {
    error: error,
    handleChange: async (event) => {
      const value = event?.target.value
      const error = await validateFn(value)
      setError(error as string)
    }
  })

  return cloneProps
}
