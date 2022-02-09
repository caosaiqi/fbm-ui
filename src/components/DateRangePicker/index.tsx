import React from 'react'
import moment from 'moment'

import Popover from '../Popover'
import StaticDateRangePicker, { FbmStaticDateRangePickerProps } from '../StaticDateRangePicker'
import Input, { FbmInputProps } from '../Input'
import { isFunction, isEmpty } from '../../utils'
import useFormItemContext from '../FormItem/useFormItemContext';

interface FbmDateRangePickerProps {
  value: FbmStaticDateRangePickerProps['value'];
  onChange: FbmStaticDateRangePickerProps['onChange'];
  formatStr?: string;
  placeholder: FbmInputProps['placeholder'];
  disabled?: FbmInputProps['disabled'];
  InputProps?: FbmInputProps;
}

function useFormItem() {
  const formItemValues = useFormItemContext()
  return {
    value: formItemValues?.value,
    setValue: (newValue) => {
      if (!formItemValues || isEmpty(formItemValues)) return
      const { helpers } = formItemValues;
      helpers?.setValue(newValue)
    }
  }
}

const FbmDateRangePicker: React.FC<FbmDateRangePickerProps> = ({
  onChange,
  formatStr,
  placeholder,
  disabled,
  InputProps,
  value: valueProp,
  children: childrenProp,
  ...StaticDateRangePickerProps
}) => {
  // 对接formItem
  const {
    value = valueProp,
    setValue,
  } = useFormItem()

  const formatValues = (): [string, string] => {
    const [startDate, endDate] = value
    const startDateStr = startDate ? moment(startDate).format(formatStr) : ''
    const endDateStr = endDate ? moment(endDate).format(formatStr) : ''

    return [startDateStr, endDateStr]
  }

  const valueStr = (() => {
    const strs = formatValues().join('-')
    if (strs === '-') return '';
    return strs
  })()

  let children = null
  if (typeof childrenProp === 'function') {
    children = childrenProp({
      valueStr,
    })
  } else if (childrenProp != null) {
    children = childrenProp
  } else {
    children = (
      <Input
        clear
        sx={{ minWidth: 310 }}
        readOnly={true}
        value={valueStr}
        placeholder={placeholder}
        disabled={disabled}
        {...InputProps}
      />
    )
  }

  const popoverContent = ({
    handleClose,
  }) => {
    const handleDateRangePickerChange = (value) => {
      if (isFunction(onChange)) {
        onChange(value)
      }
    }

    const handleDateRangePickerAccept = (value) => {
      setValue(value)
      handleClose()
    }

    return (
      <StaticDateRangePicker
        value={value}
        onChange={handleDateRangePickerChange}
        onAccept={handleDateRangePickerAccept}
        {...StaticDateRangePickerProps}
      />
    )
  }

  return (
    <Popover
      arrow={false}
      disabled={disabled}
      content={popoverContent}>
      {children}
    </Popover>
  )
}

FbmDateRangePicker.defaultProps = {
  // value: [null, null],
  formatStr: 'YYYY年DD月MM号',
  InputProps: {},
  placeholder: ''
}

export default FbmDateRangePicker
