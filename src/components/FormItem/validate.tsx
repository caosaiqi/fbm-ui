import getValueLength from '../../utils/getValueLength'
import { isFunction, isPromise} from '../../utils'

export default async function validate(value, props) {
  // this => formItem
  const formItem = props || this
  const { rules, max, validate: validateFn } = (formItem || {})
 
  return new Promise(async (resolve) => {
    if (rules && rules.length > 0) {
      const len = rules.length
      for (let i = 0; i < len; i++) {
        const ruleFn = formItem.rules[i]
        
        // 处理报错方法
        if (isFunction(ruleFn)) {
          const errorMsg: string = await ruleFn(value)
          if (errorMsg) {
            return resolve(errorMsg)
          }
        }
      }
    }

    if (validateFn && isFunction(validateFn)) {
      const errMsg: string = await validateFn(value)
      if (errMsg) {
        return resolve(errMsg)
      }
    }


    if (max) {
      const { isDeyond } = getValueLength({ value, max })
      if (isDeyond) {
        return resolve({ isDeyond })
      }
    }

    return resolve(undefined)
  })
}