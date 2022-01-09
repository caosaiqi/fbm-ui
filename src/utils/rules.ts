export const required = (helperText, type = 'input') => {
  return (value) => {
    if (!value || value === '') {
      return helperText || '必填项'
    }
  }
}

export const max = (helperText, max) => {
  return (value) => {
    if ((value && max) && value.length > max) {
      return helperText
    }
  }
}

