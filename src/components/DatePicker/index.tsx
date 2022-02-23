import React from 'react';
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from '@mui/lab';

import Input, { FbmInputProps } from '../Input'
import LocalizationProvider from '../LocalizationProvider'
import useFormItemContext from '../FormItem/useFormItemContext';
import { DateIcon } from '../icons'

export interface FbmStaticDateRangePickerProps extends DesktopDatePickerProps {
  value: DesktopDatePickerProps['value'];
  onChange: DesktopDatePickerProps['onChange'];
  inputFormat: DesktopDatePickerProps['inputFormat'];
  disableMaskedInput: DesktopDatePickerProps['disableMaskedInput'];
  renderInput: DesktopDatePickerProps['renderInput'];
  error?: string | boolean;
  InputProps?: FbmInputProps;
}

function useMergeProps(props) {
  const formItemContext = useFormItemContext()
  if (formItemContext && formItemContext.meta) {
    const { meta, helpers, value } = formItemContext
    const {
      onChange,
      error,
      value: valueProp,
      ...restProps
    } = props
    return {
      value,
      error: meta?.error,
      onChange: (newValue) => {
        if (meta.touched === false) {
          helpers.setTouched(true)
        }
        helpers.setValue(newValue)
        onChange?.(newValue)
      },
      ...restProps
    }
  }

  return props
}

const FbmDateRangePicker: React.FC<FbmStaticDateRangePickerProps> = props => {
  const {
    value,
    error,
    InputProps,
    onChange,
    onBlur,
    inputFormat,
    ...DesktopDatePickerProps
  } = useMergeProps(props)

  const handleChange = (newValue) => {
    onChange?.(newValue)
  }

  const handleBlur = () => {
    onBlur?.(value)
  }

  const renderInput = (props) => {
    const {
      inputRef,
      inputProps,
      disabled,
      InputProps
    } = props

    if (value === null) {
      inputProps.value = ''
    }

    return (
      <Input
        disabled={disabled}
        inputRef={inputRef}
        inputProps={inputProps}
        {...InputProps}
        onBlur={handleBlur}
        onChange={() => {}}
      />
    )
  }

  return (
    <LocalizationProvider>
      <DesktopDatePicker
        value={value}
        onChange={handleChange}
        renderInput={renderInput}
        disableMaskedInput
        inputFormat={inputFormat}
        {...DesktopDatePickerProps}
      />
    </LocalizationProvider>
  )
}


FbmDateRangePicker.defaultProps = {
  inputFormat: 'yyyy/MM/dd',
  disableMaskedInput: true,
  components: {
    OpenPickerIcon: DateIcon,
  }
}



export default FbmDateRangePicker
