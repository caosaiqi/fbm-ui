import getValueLength from '../../utils/getValueLength'
import { isFunction, isObject } from '../../utils'
import * as ruleFuns from '../../utils/rules'

export default async function validate(value, props) {
  // this => formItem
  const formItem = props || this
  const { rules, max } = (formItem || {})

  return new Promise(async (resolve) => {
    if (rules && rules.length > 0) {
      const len = rules.length

      for (let i = 0; i < len; i++) {
        const rule = formItem.rules[i]

        // 处理报错方法
        if (isFunction(rule)) {
          const errorMsg: string = await rule(value, formItem)
          if (errorMsg) {
            return resolve(errorMsg)
          }
        }

        // 处理报错对象
        if (isObject(rule)) {
          const { message, required, type } = rule
          const key = required ? 'required' : type
          const ruleFn = ruleFuns[key]
         
          if (isFunction(ruleFn)) {
            const errorMsg: string = await ruleFn(message)(value, formItem)
            if (errorMsg) {
              return resolve(errorMsg)
            }
          }
        }
      }
    }

    if (max) {
      const { isBeyond, length } = getValueLength({ value, max })
      if (isBeyond) {
        return resolve({ isBeyond, length })
      }
    }

    return resolve(undefined)
  })
}