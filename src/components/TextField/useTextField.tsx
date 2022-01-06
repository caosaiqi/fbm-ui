import React, { useCallback, useMemo, useState } from 'react'

import validate from '../FormItem/validate'

export default function useTextField(cloneProps) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    children: childrenProp,
  } = cloneProps
  
  const [error, setError] = useState()

  const value = valueProp || childrenProp?.props?.value

  if (value !== undefined) {
    Object.assign(cloneProps, { value })
  }

  const validateFn = useCallback(async () => {
    const validateMsg = await validate(value, cloneProps)
    return validateMsg
  }, [])

  const handleChange = async (e) => {
    onChangeProp(e)
    const errorMsg = await validateFn()
    setError(errorMsg)
  }

  Object.assign(cloneProps, {
    error,
    onChange: handleChange
  })

  return cloneProps
}
