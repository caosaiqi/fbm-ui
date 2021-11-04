import * as React from 'react';
import { CircularProgress } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Mask from '../Mask'
import Typography from '../Typography'

export const componentName: string = 'Aloading'

type SizeType = 'small' | 'large'
type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit'
export interface AloadingProps {
  /** 尺寸 */
  size?: SizeType | number
  /** 颜色 */
  color?: ColorType | string,
  /**  Loading提示文案 */
  desc?: React.ReactNode;
  /** 是否需要遮罩 */
  isMask?: boolean;
}

const MaskRoot: React.FC<AloadingProps> = styled(Mask)(({ theme, isMask }) => {
  const { white } = theme.palette.mask
  return {
    ...(isMask && {
      backgroundColor: white,
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
})

MaskRoot.defaultProps = {
  isMask: true,
}

const LoadingRoot: React.FC<AloadingProps> = styled(CircularProgress, {
  name: 'Aloading',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))


const LoadingTextRender: React.FC<{desc?: React.ReactNode}> = ({ desc }) => {
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

const ACircularProgress: React.FC<AloadingProps> = (props) => {
  const { isMask, desc,  ...loadingProps } = props
  return (
    <MaskRoot isMask={isMask}>
      <LoadingRoot {...loadingProps} />
      <LoadingTextRender desc={desc} />
    </MaskRoot>
  )
}

ACircularProgress.defaultProps = {
  color: 'primary',
  size: 44,
}

export default ACircularProgress
