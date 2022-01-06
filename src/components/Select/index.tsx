
import React from 'react';
import { Select, SelectProps, selectClasses, MenuItem, MenuItemProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Input from '../Input'
import { ArrowDropDownIcon } from '../icons'
import { isEmpty } from '../../utils'

type OptionMap = {
  label: string;
  value: MenuItemProps['value'],
}

export interface FbmSelectProps extends SelectProps {
  name?: string;
  options?: OptionMap[];
}

const SelectRoot = styled(Select)({
  [`& .${selectClasses.icon}`]: {
    color: 'rgba(0, 0, 0, 0.56)'
  }
})

const FbmSelect: React.FC<FbmSelectProps> = React.forwardRef((props, ref) => {
  const {
    options,
    children: childrenProp,
    ...selectProps
  } = props

  let children = null
  
  if (childrenProp != null) {
    children = childrenProp
  } else if (!isEmpty(options)) {
    children = options.map(({label, value}) => (
      <MenuItem key={label} value={value}>
        {label || value}
      </MenuItem>
    ))
  }

  return (
    <SelectRoot {...selectProps} ref={ref}>
      {children}
    </SelectRoot>
  )
})

FbmSelect.defaultProps = {
  input: <Input />,
  IconComponent: ArrowDropDownIcon,
  options: [],
  fullWidth: true,
}

export default FbmSelect