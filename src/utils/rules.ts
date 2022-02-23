import { isArray } from './index'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^1[3456789]\d{9}$/;

// 验证是否必填
export const required = (helperText?: string) => {
  return (
    value,
    formItem = {}
  ) => {
    const { label } = (formItem as { label: string })

    const isEmpty = (item) => {
      // 空字符串
      if (typeof item === 'string' && item.trim() === '') return true

      //undefined
      if (item === undefined) return true

      // null
      if (item === null) return true

      //数组
      if (isArray(item)) {
        const found = item.find(element => {
          return !isEmpty(element)
        })
        return found === undefined
      }
    }

    if (isEmpty(value)) {
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

// 验证手机号
export const mobile = (helperText?: string) => {
  return (value) => {
    if (value && !MOBILE_REGEX.test(value)) {
      return helperText || '请输入正确的手机号';
    }
  }
}

// 验证邮箱地址
export const email = (helperText?: string) => {
  return (value) => {
    if (value && !EMAIL_REGEX.test(value)) {
      return helperText || '请输入正确的邮箱'
    }
  }
}

export const date = (helperText?: string) => {
  return (value) => {
    const isValid = Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value)
    if (!isValid) {
      return helperText || '请输入正确的时间格式'
    }
  }
}


export default {
  required,
  mobile,
  email,
  date
}