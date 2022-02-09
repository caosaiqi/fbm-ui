import React from 'react';
import styled from '@mui/material/styles/styled'
import {
  StaticDateRangePicker,
  StaticDateRangePickerProps,
  pickersDayClasses,
  dateRangePickerDayClasses
} from '@mui/lab';

import LocalizationProvider from '../LocalizationProvider'

export interface FbmStaticDateRangePickerProps {
  value: StaticDateRangePickerProps['value'];
  onChange: StaticDateRangePickerProps['onChange'];
  onAccept: StaticDateRangePickerProps['onAccept']
}

const DateRangePicker = styled(StaticDateRangePicker)(() => {
  return {
    [`& .${pickersDayClasses.root}`]: {
      width: '24px',
      height: '24px',
      fontSize: '14px',
      transform: 'none',
    },
    [`& .${dateRangePickerDayClasses.rangeIntervalPreview}`]: {
      margin: '3px'
    },
    [`& .${dateRangePickerDayClasses.root}`]: {
      margin: 0,
    },
    ['& .PrivatePickersSlideTransition-root']: {
      minWidth: 260,
      minHeight: 190,
    },
    ['& span.MuiTypography-caption']: {
      width: '24px',
      height: 'auto',
      margin: 0,
      border: '5px solid transparent'
    }
  }
})

const FbmDateRangePicker: React.FC<FbmStaticDateRangePickerProps> = ({
  value,
  onChange,
  onAccept,
  ...DateRangePickerProps
}) => {
  return (
    <LocalizationProvider>
      <DateRangePicker
        value={value}
        disableHighlightToday
        displayStaticWrapperAs='desktop'
        onChange={onChange}
        onAccept={onAccept}
        renderInput={(startProps, endProps) => {
          return null
        }}
        {...DateRangePickerProps}
      />
    </LocalizationProvider>
  )
}

export default FbmDateRangePicker
