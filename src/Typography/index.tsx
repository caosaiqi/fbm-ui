import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material'

type ColorTypeMap = 'error' | 'warning' | 'success' | 'info' | 'black' | 'white' | 'secondary' | 'disabled'
type WeightTypeMap = 'light' | 'regular' | 'medium' | 'bold'
export interface AuiTypographyProps extends TypographyProps {
  children?: React.ReactNode;
  /** 字体颜色 */
  color?: ColorTypeMap | string;
  /** 字体色重 */
  weight?: WeightTypeMap | string;
  /**
   *  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
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
