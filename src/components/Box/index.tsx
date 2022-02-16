import * as React from 'react';
import { Box, BoxProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Loading from '../Loading'
import Mask, { FbmMaskProps } from '../Mask'

interface LoadingProps {
  /** 遮罩loading */
  loading?: boolean;
  /** Loding尺寸 */
  size?: 'large' | 'small' | number;
  /** Loading提示文案 */
  desc?: React.ReactNode;
  /** 是否需要遮罩 */
  isMask?: boolean;
 
}

export interface FbmBoxProps extends BoxProps {
  /** loading */
  loading?: boolean | LoadingProps;
  /** 是否禁用 */
  disabled?: boolean;
  MaskProps?: FbmMaskProps
}

const BoxRoot: React.FC = styled(Box)({
  position: 'relative',
  boxSizing: 'border-box',
})


const DisabledMaskRender: React.FC<{
  disabled?: boolean
}> = ({
  disabled,
}) => disabled ? <Mask /> : null

const LoadingRender: React.FC<LoadingProps> = ({
  loading,
  size,
  desc,
}) => {
  if (!loading) return null
  return (
    <Loading desc={desc} size={size} />
  )
}

const FbmBox: React.FC<FbmBoxProps> = ({
  loading,
  disabled,
  children,
  MaskProps,
  ...otherProps
}) => {

  const loadingProps = {
    ...(
      (typeof (loading) === 'boolean')
        ? { loading }
        : loading
    ),
  }

  return (
    <BoxRoot {...otherProps}>
      <LoadingRender {...loadingProps} />
      <DisabledMaskRender
        disabled={disabled}
        {...MaskProps}
      />
      {children}
    </BoxRoot>
  )
}

FbmBox.defaultProps = {
  loading: false,
  disabled: false,
}

export default FbmBox
