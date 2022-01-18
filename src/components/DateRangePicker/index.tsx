import React from 'react';

import LocalizationProvider from '../LocalizationProvider'
import { StaticDateRangePicker, StaticDateRangePickerProps } from '@mui/lab';

interface FbmDateRangePickerProps {
  value: any;
  onChange?: StaticDateRangePickerProps['onChange']
}

const FbmDateRangePicker: React.FC<FbmDateRangePickerProps> = (inPorps) => {
  const {
    children,
    onChange
  } = inPorps;

  return (
    <LocalizationProvider>
      <StaticDateRangePicker
        onChange={onChange}
        value={undefined}
        renderInput={undefined}
      />
    </LocalizationProvider>
  )
}

export default FbmDateRangePicker
