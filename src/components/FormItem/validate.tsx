import getValueLength from '../../utils/getValueLength'
import { isFunction, isPromise} from '../../utils'

export default async function validate(value, props) {
  // this => formItem
  const formItem = props || this
  const { rules, max  } = (formItem || {})
  
  return new Promise(async (resolve) => {
    if (rules && rules.length > 0) {
      const len = rules.length
      for (let i = 0; i < len; i++) {
        const ruleFn = formItem.rules[i]
        
        // 处理报错方法
        if (isFunction(ruleFn)) {
          const errorMsg: string = await ruleFn(value, formItem)
          if (errorMsg) {
            return resolve(errorMsg)
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