
// dev阶段
import React from 'react';
import { Select, SelectProps, InputLabel, FormControl, MenuItem, MenuItemProps, FormHelperText } from '@mui/material'

import useFormikFieldProps from '../hooks/useFormikFieldProps'

type OptionMap = {
  label: string;
  value: MenuItemProps['value'],
}

export interface FbmSelectProps extends SelectProps {
  id?: string;
  name?: string;
  options?: OptionMap[];
}

const FbmSelect: React.FC<FbmSelectProps> = React.forwardRef((props, ref) => {
  const {
    id,
    name,
    label,
    value,
    options,
    variant,
    labelId: labelIdProp,
    children: childrenProp,
    ...otherSelectProps
  } = props

  let children = childrenProp
  if (options && options.length > 0) {
    children = options.map(({ label, value }) => {
      return (
        <MenuItem key={label} value={value}>
          {label || value}
        </MenuItem>
      )
    })
  }

  const labelId = labelIdProp || [id, name, 'lable'].filter(v => !!v).join('-')
  
  const formControlProps = {
    variant,
  }

  const selectProps = {
    labelId,
    label,
    ...otherSelectProps
  }

  const inputLabelProps = {
    labelId,
  }

  return (
    <FormControl {...formControlProps}>
      <InputLabel {...inputLabelProps}>
        {label}
      </InputLabel>
      <Select { ...selectProps}>
        {children}
      </Select>
      <FormHelperText>
      
      </FormHelperText>
    </FormControl>
  )
})

FbmSelect.defaultProps = {
  id: `select${new Date().getTime()}`,
  variant: 'outlined',
  options: [],
}

export default FbmSelect