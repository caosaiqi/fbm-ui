import * as React from 'react';
import { Box, BoxProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

import Loading from '../Loading'
import Typography from '../Typography'

export const componentName: string = 'Abox'

export interface AboxProps extends BoxProps {
  /** 遮罩loading */
  loading?: boolean;
  /** Loding尺寸 */
  loadingSize?: 'large' | 'small' | number;
  /** Loading提示文案 */
  loadingText?: React.ReactNode;
}

const BoxRoot: React.FC<AboxProps> = styled(Box)(() => ({
  position: 'relative',
}))

const LoadingRoot = styled(Box)({
  position: 'absolute',
  left: '0',
  top: '0',
  bottom: '0',
  right: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255,255,255,0.8)',
})

const Abox: React.FC<AboxProps> = ({
  loading,
  loadingSize,
  loadingText,

  children,
  ...otherProps
}) => {
  const LoadingTextRender: React.FC = () => {
    if (!loadingText) return null;
    if (typeof loadingText === 'string') {
      return <Typography variant="overline" display="block" weight="regular" >{loadingText}</Typography>
    }
    return (
      <Box>
        {loadingText}
      </Box>
    )
  }
  const LoadingRender: React.FC = () => {
    if (!loading) return null
    return (
      <LoadingRoot>
        <Box textAlign="center">
          <Loading size={loadingSize} />
          <LoadingTextRender />
        </Box>
      </LoadingRoot>
    )
  }

  return (
    <BoxRoot {...otherProps}>
      <LoadingRender />
      {children}
    </BoxRoot>
  )
}

export default Abox
