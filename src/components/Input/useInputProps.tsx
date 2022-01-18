import useFormItemContext from '../FormItem/useFormItemContext';
import { isEmpty, isObject } from '../../utils'

/**
 * @desc 处理input使用的三种情况
 * @A 配合FormItem使用
 * @B 配合TextFiled使用
 * @C 直接Input
 */
export default function useInputProps(inputProps = {}) {
  const formItemValues = useFormItemContext()
  if (isObject(formItemValues) && !isEmpty(formItemValues)) {
    const mergeProps = Object.assign(
      {},
      formItemValues,
      {
        error: !!formItemValues.error
      },
      inputProps
    )
    
    for(const key in mergeProps) {
      if (mergeProps[key] === undefined) {
        delete mergeProps[key]
      }
    }

    return mergeProps
  } else {
    return inputProps
  }
}