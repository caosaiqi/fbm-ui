import * as React from 'react';
import { Button, ButtonProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import { alpha } from '@mui/system';

import Loading from '../Loading'

export const componentName: string = 'Input'
export interface FbmButtonProps extends ButtonProps {
  /** 按钮loading */
  loading?: boolean;
  /** 按钮禁用 */
  disabled?: boolean;
  /** 按钮显示文字 */
  text?: string;
  /** 按钮icon */
  icon?: ButtonProps['startIcon']
}

const loadingProps = {
  isMask: false,
  size: 16,
}

const ButtonRoot = styled(Button)(({ color, theme, variant, size }) => {
  return {
    minWidth: 'auto',
    '&:hover': {
      boxShadow: 'none',
      ...(variant === 'text' &&
        color !== 'inherit' && {
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity,
          ),
      })
    },
    ...(size === 'small' && {
      padding: '1px 8px',
    }),
    ...(color === 'inherit' && {
      borderColor: 'rgba(0,0,0,.12)',
      color: theme.palette.text.primary,
      '&:hover': {
        background: theme.palette.action.hover,
        borderColor: 'rgba(0,0,0,.04)',
      },
    }),
    ...(variant === 'text' &&
      color !== 'inherit' && {
      color: theme.palette[color].main,
    }),
    ...(variant === 'outlined' && {
      backgroundColor: '#fff',
      ...(size === 'small' && {
        padding: '0px 7px',
      }),
      ...(size === 'medium' && {
        padding: '4px 15px',
      }),
      ...(size === 'large' && {
        padding: '8px 23px',
      }),
    }),
  }
})

const FbmButton: React.FC<FbmButtonProps> = (props) => {
  const { loading, children, text, icon, ...buttonProps } = props
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
  color: 'primary',
  size: 'medium',
}

export default FbmButton
