import React from 'react';
import { MenuItem } from '@mui/material'

interface Option {
  label: string;
  value: number | string | undefined
}

export interface OptionsProps {
  options?: Option[]
}


const FbmOptions: React.FC<OptionsProps> = (props, ref) => {
  const { options } = props
  if (!options || (options && options.length === 0)) {
    return null
  }

  const optionsNode = options.map(({ label, value }) => {
    return (
      <MenuItem key={value} value={value}>
          {label || value}
      </MenuItem>
    )
  })

  return <> {optionsNode} </>
}


FbmOptions.defaultProps = {
  options: []
}

export default FbmOptions