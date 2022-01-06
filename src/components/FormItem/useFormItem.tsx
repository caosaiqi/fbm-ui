import React from 'react'
import { useFormikContext } from 'formik'

import validate from './validate'

export default function useFormItem(cloneProps) {
  const {
    name,
    value: valueProp,
    validate: validateProp,
    children: childrenProp,
  } = cloneProps

  const formik = useFormikContext()
  
  // 判断是否使用 src/components/Form
  if (!formik) {
    const value = valueProp || childrenProp?.props?.value
    if (value !== undefined) {
      Object.assign(cloneProps, {
        value
      })
    }
   
    return cloneProps
  }

  // 利用Formik特效来处理props
  const { getFieldMeta, getFieldProps, getFieldHelpers } = formik
  const fieldProps = getFieldProps({ name })
  const fieldMeta = getFieldMeta(name)
  const fieldHelpers = getFieldHelpers(name)

  // 属性merge
  Object.assign(cloneProps, fieldMeta, fieldProps, fieldHelpers)

  // 处理报错
  const { registerField, unregisterField } = formik;
  React.useEffect(() => {
    registerField(name, {
      validate: async (value) => {
        console.log(value)
        // await validate(value, )
      }
    });
    return () => {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validateProp]);

  return cloneProps
}
