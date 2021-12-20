
import React from 'react'
import styled from '@mui/material/styles/styled'
import { CircularProgress, Box } from '@mui/material'

import { FbmTableLoading } from '../types'
import Typography from '../../Typography'

const Root: React.FC<{
  loading: FbmTableLoading['loading']
}> = styled(Box)(({ theme, loading }) => {
  console.log(loading)
  const height = 54
  const s = loading ? '0.07s' : '0.15s'
  return {
    zIndex: 2,
    transition: `top ${s} ease-in-out`,
    paddingLeft: 18,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: loading ? 0 : `-${height}px`,
    left: 0,
    backgroundColor: theme.palette.primary.light,
    height
  }
})

const Text = styled(Typography)(({ theme }) => (
  {
    color: theme.palette.primary.main,
    marginLeft: 16,
    fontSize: 14
  }
))

const TableLoading: React.FC<FbmTableLoading> = ({
  loading,
  nameText,
}) => {
  const getText = () => {
    let defaultText = '正在载入'
      if (nameText) {
        if (typeof nameText === 'string') return `${defaultText}${nameText}`
        if (typeof nameText === 'function') return nameText('loading')
      }
      return defaultText
  }
  return (
    <Root loading={loading}>
      <CircularProgress size={16} />
      <Text>
        {getText()}
      </Text>
    </Root>
  )
}

export default TableLoading