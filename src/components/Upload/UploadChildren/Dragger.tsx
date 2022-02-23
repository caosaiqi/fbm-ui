import React from 'react';
import { Box } from '@mui/material'
import styled from '@mui/material/styles/styled'

const DraggerBox = styled(Box)({
  border: '1px dashed #999999',
  height: '166px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
})

const Dragger: React.FC = props => {
  return (
    <DraggerBox {...props}>
      文件拖拽至此处
      
    </DraggerBox>
  )
}

export default Dragger