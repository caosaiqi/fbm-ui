import * as React from 'react';
import { Box, BoxProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

import Loading from '../Loading'
import Mask from '../Mask'

export const componentName: string = 'Abox'

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

export interface AboxProps extends BoxProps {
  /** loading */
  loading?: boolean | LoadingProps;
  /** 是否禁用 */
  disabled?: boolean
}

const BoxRoot: React.FC<BoxProps> = styled(Box)({
  position: 'relative',
  boxSizing: 'border-box',
})

const MaskRoot: React.FC<LoadingProps>= styled(Mask)(({ theme, isMask }) => {
  const { white } = theme.palette.mask
  return {
    ...(isMask && {
      backgroundColor: white,
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

MaskRoot.defaultProps = {
  isMask: true,
}

const DisabledMaskRender: React.FC<{
  disabled?: boolean
}> = ({
  disabled,
}) => disabled ? <MaskRoot /> : null

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

const Abox: React.FC<AboxProps> = ({
  loading,
  disabled,
  children,
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
      <DisabledMaskRender disabled={disabled} />
      {children}
    </BoxRoot>
  )
}

export default Abox
