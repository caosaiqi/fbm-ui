import * as React from 'react';
import { Button, ButtonProps } from '@mui/material'

import Loading from '../Loading'

export const componentName: string = 'Input'
export interface FbmButtonProps extends ButtonProps {
  loading?: boolean;
}

const FbmButton: React.FC<FbmButtonProps> = (props) => {
  const { loading, children, ...buttonProps } = props

  if (loading) {
    buttonProps.disabled = true
  }

  const loadingProps = {
    isMask: false,
    size: 16,
  }

  const LoadingRender: React.FC = () => loading ? <Loading {...loadingProps} /> : null

  return (
    <Button {...buttonProps}>
      {children}
      <LoadingRender />
    </Button>
  )
}

FbmButton.defaultProps = {
  variant: 'contained',
  loading: false,
}

export default FbmButton
