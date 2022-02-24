import * as React from 'react';
import { CircularProgress } from '@mui/material'
import styled from '@mui/material/styles/styled'

import { FbmThemeOptions } from '../ThemeProvider'
import Mask from '../Mask'
import Typography from '../Typography'

export const componentName: string = 'Loading'

type SizeType = 'small' | 'large'
type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit'
export interface FbmLoadingProps {
  /** 尺寸 */
  size?: SizeType | number
  /** 颜色 */
  color?: ColorType | string,
  /**  Loading提示文案 */
  desc?: React.ReactNode;
  /** 是否需要遮罩 */
  isMask?: boolean;
}

const MaskRoot: React.FC<FbmLoadingProps> = styled(Mask)(({ theme, isMask }) => {
  return {
    ...(isMask && {
      backgroundColor: (theme as FbmThemeOptions).custom?.mask.white,
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

const LoadingRoot: React.FC<FbmLoadingProps> = styled(CircularProgress, {
  name: 'Loading',
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

const FbmLoading: React.FC<FbmLoadingProps> = (props) => {
  const { isMask, desc,  ...loadingProps } = props
  return (
    <MaskRoot isMask={isMask}>
      <LoadingRoot {...loadingProps} />
      <LoadingTextRender desc={desc} />
    </MaskRoot>
  )
}

FbmLoading.defaultProps = {
  color: 'primary',
  size: 44,
}

export default FbmLoading
