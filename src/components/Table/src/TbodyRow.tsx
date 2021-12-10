import React from 'react';

import styled from '@mui/material/styles/styled'
import { TableRow } from '@mui/material'

interface TbodyRowProps {
  index: number
}

const TableRowRoot: React.FC<TbodyRowProps> = styled(TableRow)(({ index }) => {
  return {
    '&:hover': {
      backgroundColor: '#f4f4f4'
    },
    backgroundColor: index % 2 === 0 ? '#FAFAFA' : '#fff'
  }
})

const TbodyRow: React.FC<TbodyRowProps> = ({ children, index }) => {
  return (
    <TableRowRoot index={index}>
      {children}
    </TableRowRoot>
  )
}

export default TbodyRow