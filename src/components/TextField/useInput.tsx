import React from 'react'

import validateFn from '../FormItem/validate'

export default function useValidate(props) {
  const {
    max,
    value: valueProp,
    rules,
    name,
    label,
  } = props

  const [error, setError] = React.useState(undefined)
  const [value, setValue] = React.useState(valueProp)

  React.useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  const validate = async () => {
    console.log(value)
    const error = await validateFn(value, {
      rules,
      max,
      name,
      label,
    })
    setError(error)
    return error
  }

  const handleValue = (newValue) => {
    setValue(newValue)
    console.log(value)
  }


  return {
    value, 
    setValue: handleValue,
    error,
    setError,
    validate,
  }
}
