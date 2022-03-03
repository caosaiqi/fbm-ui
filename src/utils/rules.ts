import { isArray, isDate, isObject } from './index'
import moment from 'moment'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^1[3456789]\d{9}$/;

// 验证是否必填
export const required = (message?: string) => {
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
      //空对象
      if(isObject(item)) {
        return Object.keys(item).length === 0
      }
    }

    if (isEmpty(value)) {
      if (message) return message
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
export const mobile = (message?: string) => {
  return (value) => {
    if (value && !MOBILE_REGEX.test(value)) {
      return message || '请输入正确的手机号';
    }
  }
}

// 验证邮箱地址
export const email = (message?: string) => {
  return (value) => {
    if (value && !EMAIL_REGEX.test(value)) {
      return message || '请输入正确的邮箱'
    }
  }
}

export const date = (message?: string) => {
  return (value) => {
    if (!isDate(value)) {
      return message || '请输入正确的日历格式'
    }
  }
}

export const time = (message?: string) => {
  return (value) => {
    if (!moment(value, 'HH:mm', true).isValid()) {
      return message || '请输入正确的时间格式'
    }
  }
}

export default {
  required,
  mobile,
  email,
  date
}