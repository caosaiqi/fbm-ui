import React from 'react'
import { useFormikContext } from 'formik'
import getValueLength from '../../utils/getValueLength'
import { isFunction, isPromise} from '../../utils'


async function _validate(value) {
  // this => formItem
  const formItem = this
  const { rules, max, extra, validateFn } = (formItem || {})

  return new Promise(async (resolve, reject)  => {
    if (rules && rules.length > 0) {
      const len = rules.length
      for (let i = 0; i < len; i++) {
        const ruleFn = formItem.rules[i]
        if (isFunction(ruleFn)) {
          // 有报错信息
          const errorMsg: string = await ruleFn(value)
          if (errorMsg) {
            return resolve(errorMsg)
          }
        }
      }
    }

    if (validateFn && (isFunction(validateFn) || isPromise(validateFn))) {
      const errMsg:string = validateFn(value)
      if (errMsg) {
        return resolve(errMsg)
      }
    }


    if (max) {
      const { isDeyond } = getValueLength({ value, max })
      if (isDeyond) {
         return resolve(extra || true)
      }
    }
    
    return resolve(undefined)
  })
}

export default function useItem(formItem) {
  const { name, validateFn } = formItem

  const formik = useFormikContext();

  // 判断是否使用 src/components/Form
  if (!formik) {
    return formItem
  }

  const { getFieldMeta, getFieldProps, getFieldHelpers} = formik
  const fieldProps = getFieldProps({ name })
  const fieldMeta = getFieldMeta(name)
  const fieldHelpers = getFieldHelpers(name)
  Object.assign(formItem, fieldMeta, fieldProps, fieldHelpers)

  // 处理报错
  const { registerField, unregisterField } = formik;
  React.useEffect(() => {
    registerField(name, {
      validate: _validate.bind(formItem)
    });
    return () => {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validateFn]);

  return formItem
}
