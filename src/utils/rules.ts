const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^1[3456789]\d{9}$/;

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

export const max = (helperText) => {
  return (value) => {
    if ((value && max) && value.length > max) {
      return helperText
    }
  }
}

export const mobile = (helperText) => {
  return (value) => {
    if (!MOBILE_REGEX.test(value)) {
      return helperText || '请输入正确的手机号';
    }
  }
}

export const email = (helperText) => {
  return (value) => {
    if (!EMAIL_REGEX.test(value)) {
      return helperText || '请输入正确的邮箱'
    }
  }
}
