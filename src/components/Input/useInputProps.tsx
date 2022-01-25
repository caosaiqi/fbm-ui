import useFormItemContext from '../FormItem/useFormItemContext';
import { isEmpty, isObject } from '../../utils'

/**
 * @desc 处理input使用的三种情况
 * @A 配合FormItem使用
 * @B 配合TextFiled使用
 * @C 直接Input
 */
export default function useInputProps(inputProps = {}): any {
  // 获取FormItemProvder
  const formItemValues = useFormItemContext()

  if (isObject(formItemValues) && !isEmpty(formItemValues)) {
    const {
      name,
      value,
      label,
      onChange,
      onBlur,
      length, //chineseLength
      meta = {},
      helpers = {},
    } = formItemValues
    
    const InputProps = {
      name,
      value,
      label,
      onChange,
      onBlur,
      length,
      meta,
      helpers,
      error: !isEmpty(meta.error),
      ...inputProps,
    }

    for (const key in InputProps) {
      if (InputProps[key] === undefined) {
        delete InputProps[key]
      }
    }

    return InputProps
  } else {
    return inputProps
  }
}