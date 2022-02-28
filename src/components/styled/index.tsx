import React from 'react'
import { styled } from './styled'
import Box from '../Box'

type Props = {
  type: string
}

const Root: React.FC<Props> = styled(Box)(() => {
  return {
    color: 'red'
  }
})

export default () => {
  return <Root type="2"></Root>
}