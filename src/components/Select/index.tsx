
// dev阶段
import React from 'react';
import { Select, InputLabel, FormControl, MenuItem, SelectProps, FormHelperText } from '@mui/material'

import useFormikFieldProps from '../hooks/useFormikFieldProps'

type OptionMap = {
  label: string;
  value: unknown
}

interface FbmSelect extends SelectProps {
  name: string;
  label?: string;
  value: unknown
  options?: OptionMap[];
  labelId?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  disabled?: boolean;
  fullWidth: boolean;
}


const FbmSelect: React.FC<FbmSelect> = React.forwardRef((props, ref) => {
  const {
    name,
    label,
    value,
    options,
    children,
    labelId,
    variant, fullWidth,
    ...otherProps
  } = props


  const selectProps = useFormikFieldProps({
    value,
    ref,
    name,
    labelId: labelId || `${label}_${name}`,
    ...otherProps
  })

  const formControlProps = {
    variant,
    fullWidth,
    error: selectProps.error
  }

  return (
    <FormControl {...formControlProps} sx={{ mb: 30 }}>
      <InputLabel id={selectProps.labelId}>
        {label}
      </InputLabel>
      <Select {...selectProps}>
        {/* {
          children ? children : options.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label || value}
            </MenuItem>
          ))
        } */}
      </Select>
      <FormHelperText>{selectProps.helperText}</FormHelperText>
    </FormControl>
  )
})

FbmSelect.defaultProps = {
  fullWidth: true,
  variant: 'outlined',
  options: [],
}

export default FbmSelect