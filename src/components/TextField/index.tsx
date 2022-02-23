import React from 'react'
import FormItem, { FbmFormItemProps } from '../FormItem/FormItem'
import { FbmInputProps } from '../Input'
import DatePicker from '../DatePicker'

export { default as useTextField } from './useTextField'

interface FbmTextField extends FbmFormItemProps {
  onError?: () => void;
  onChange?: FbmInputProps['onChange']
  component?: string;
  setError?: () => void;
  handleValidate?: () => void;
  isBeyond?: boolean;
}

const components = {
  DatePicker: DatePicker
}

const FbmTextField: React.FC<FbmTextField> = React.forwardRef(({
  /** useTextField生成的 无需传给FormItem   */
  setError,
  handleValidate,
  isBeyond,
  /** end  */
  children: childrenProp,
  component,
  ...props
}, ref) => {

  let children = null
  if (component) {
    const Component = components[component]
    children = <Component {...props}/>
  }

  return (
    <FormItem
      inputRef={ref}
      {...props}
    >
      {children}
    </FormItem>
  )
})

export default FbmTextField