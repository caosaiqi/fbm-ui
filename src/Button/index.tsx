import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core'

import Aloading from '../Loading'

export const componentName: string = 'Ainput'
export interface AbuttonProps extends ButtonProps {
  loading?: boolean;
}

const Abutton: React.FC<AbuttonProps> = (props) => {
  const { loading, children, ...buttonProps } = props

  if (loading) {
    buttonProps.disabled = true
  }

  const loadingProps = {
    isMask: false,
    size: 16,
  }

  const LoadingRender: React.FC = () => loading ? <Aloading {...loadingProps} /> : null

  return (
    <Button {...buttonProps}>
      {children}
      <LoadingRender />
    </Button>
  )
}

Abutton.defaultProps = {
  variant: 'contained',
  loading: false,
}

export default Abutton
