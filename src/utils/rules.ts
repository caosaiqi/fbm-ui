export const required = (helperText, type = 'input') => {

  return (value) => {
    if (!value || value === '') {
      return helperText || '必填项'
    }
  }
}

