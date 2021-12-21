import * as React from 'react';
import { Button, ButtonProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Loading from '../Loading'

export const componentName: string = 'Input'
export interface FbmButtonProps extends ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  icon?: ButtonProps['startIcon']
}

const loadingProps = {
  isMask: false,
  size: 16,
}

const ButtonRoot = styled(Button)(({ variant }) => {
  return {
    '&:hover': {
      boxShadow: 'none',
    },
    ...(variant === 'outlined' && {
      backgroundColor: '#fff',
    })
  }
})

const FbmButton: React.FC<FbmButtonProps> = (props) => {
  const { loading, children, text, icon,  ...buttonProps } = props

  if (loading) {
    buttonProps.disabled = true
  }
  
  buttonProps['startIcon'] = buttonProps.startIcon || icon
  
  const LoadingRender: React.FC = () => loading ? <Loading {...loadingProps} /> : null
  
  return (
    <ButtonRoot {...buttonProps}>
      {children || text}
      <LoadingRender />
    </ButtonRoot>
  )
}

FbmButton.defaultProps = {
  variant: 'contained',
  loading: false,
}

export default FbmButton
