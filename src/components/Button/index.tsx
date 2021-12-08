import * as React from 'react';
import { Button, ButtonProps } from '@mui/material'

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


const FbmButton: React.FC<FbmButtonProps> = (props) => {
  const { loading, children, text, icon,  ...buttonProps } = props

  if (loading) {
    buttonProps.disabled = true
  }
  
  buttonProps['startIcon'] = buttonProps.startIcon || icon
  
  const LoadingRender: React.FC = () => loading ? <Loading {...loadingProps} /> : null
  return (
    <Button {...buttonProps}>
      {children || text}
      <LoadingRender />
    </Button>
  )
}

FbmButton.defaultProps = {
  variant: 'contained',
  loading: false,
}

export default FbmButton
