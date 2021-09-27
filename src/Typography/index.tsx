import * as React from 'react';
import { Typography, TypographyProps } from '@material-ui/core'

export interface AuiTypographyProps extends TypographyProps {
  children?: React.ReactNode;
  color?: string;
  weight?: string | number;
}

const colorTransformations = {
  error: 'error.main',
  warning: 'warning.main',
  success: 'success.main',
  info: 'info.main',
  black: 'common.black',
  white: 'common.white',
  secondary: 'text.secondary',
  primary: 'text.primary',
  disabled: 'text.disabled',
}

const transformDeprecatedColors = color => colorTransformations[color] || color

const weightTransformations = {
  light: 'fontWeightLight',
  regular: 'fontWeightRegular',
  medium: 'fontWeightMedium',
  bold: 'fontWeightBold',
}

const transformDeprecatedWeight = weight => weightTransformations[weight] || weight

const AuiTypography: React.FC<AuiTypographyProps> = ({ children, color, weight, ...props }) => {
  const textColor = transformDeprecatedColors(color)
  const textWeight = transformDeprecatedWeight(weight)

  return (
    <Typography
      color={textColor}
      fontWeight={textWeight}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default AuiTypography
