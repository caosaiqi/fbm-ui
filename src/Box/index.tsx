import * as React from 'react';
import { Box, BoxProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

import Loading from '../Loading'
import Typography from '../Typography'
import Mask from '../Mask'

export const componentName: string = 'Abox'

interface LoadingProps {
  /** 遮罩loading */
  loading?: boolean;
  /** Loding尺寸 */
  size?: 'large' | 'small' | number;
  /** Loading提示文案 */
  desc?: React.ReactNode;
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

const MaskRoot = styled(Mask)(({ theme }) => {
  const { white } = theme.palette.mask
  return {
    backgroundColor: white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

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

  const LoadingTextRender: React.FC = () => {
    if (!desc) return null;
    if (typeof desc === 'string') {
      return (
        <Typography
          variant='overline'
          display='block'
          weight='regular'
        >
          {desc}
        </Typography>
      )
    }
    return <span>{desc}</span>
  }

  return (
    <MaskRoot>
      <Box textAlign='center'>
        <Loading size={size} />
        <LoadingTextRender />
      </Box>
    </MaskRoot>
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
