
export const required = (helperText) => {
  return (
    value,
    formItem = {}
  ) => {
    const { label } = (formItem as { label: string })
    if (!value || (typeof value === 'string' && value.trim() === '')) {

      if (helperText) return helperText

      let labelStr = '此处'
      if (label && typeof label === 'string') {
        if (label.endsWith('*')) {
          labelStr = label.slice(0, -1)
        } else {
          labelStr = label
        }
      }

      return `${labelStr}不能为空`
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

