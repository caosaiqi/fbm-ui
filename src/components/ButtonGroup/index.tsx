import React from 'react';
import { ButtonGroup, ButtonGroupProps, buttonGroupClasses } from '@mui/material'
import styled from '@mui/material/styles/styled'

interface FbmButtonGroupProps extends ButtonGroupProps { }

const FbmButtonGroupRoot = styled(ButtonGroup)(({ variant, orientation, theme }) => {
  return {
    boxShadow: 'none',
    [`& .${buttonGroupClasses.grouped}`]: {
      '&:not(:last-of-type)': {
        ...(variant === 'contained' &&
          orientation === 'horizontal' && {
          [`&.${buttonGroupClasses.disabled}`]: {
            borderRight: `1px solid ${theme.palette.action.disabledBackground}`,
          },
        }),
      }
    }
  }
})

const FbmButtonGroup: React.FC<FbmButtonGroupProps> = React.forwardRef((props, ref) => {
  return (
    <FbmButtonGroupRoot
      ref={ref}
      {...props}
    />
  )
})

FbmButtonGroup.defaultProps = {
  variant: 'contained',
  orientation: 'horizontal',
}

export default FbmButtonGroup