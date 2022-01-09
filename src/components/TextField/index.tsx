import React from 'react'

import FormItem, { FbmFormItemProps } from '../FormItem/FormItem'
import { FbmInputProps } from '../Input'

import { isFunction } from '../../utils'

export { default as useTextField } from './useTextField'

interface FbmTextField extends FbmFormItemProps {
  onError?: () => void;
  onChange: FbmInputProps['onChange']
}

const FbmTextField: React.FC<FbmTextField> = React.forwardRef((inProps, ref) => {
  return (
    <FormItem
      {...inProps}
    />
  )
})

export default FbmTextField