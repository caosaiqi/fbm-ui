import useFormItemContext from '../FormItem/useFormItemContext';
import { UseFormItemReturn } from '../FormItem/useFormItem'
import { isEmpty } from '../../utils'

/**
 * @desc 处理input使用的三种情况
 * @A 配合FormItem使用
 * @B 配合TextFiled使用
 * @C 直接Input
 */
export default function useInputProps(props) {
  const formItemValues = useFormItemContext()
  
  if (!isEmpty(formItemValues)) {
    const {
      name,
      label,
      value,
      length,
      meta,
      helpers,
      onBlur,
      onChange,
      size,
    } = formItemValues
     
    // 和form组件建立连接
    const InputProps = {
      name,
      value,
      label,
      onChange,
      onBlur,
      length,
      meta,
      helpers,
      size,
      // 小心覆盖
      ...props,
    }

    for (const key in InputProps) {
      if (InputProps[key] === undefined) {
        delete InputProps[key]
      }
    }

    return InputProps
  }

  return props
}