export const required = (helperText) => {
  return (value, { label } = {}) => {
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
      // 拼接为
      labelStr += '为'

      return `${labelStr}必填项`
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

