import React from 'react';

import styled from '@mui/material/styles/styled'
import { TableRow } from '@mui/material'

interface TbodyRowProps {
  index: number,
}

const TableRowRoot: React.FC<TbodyRowProps> = styled(TableRow)(({ index }) => {
  return {
    position: 'relative',
    '&:hover': {
      backgroundColor: '#f4f4f4'
    },
    backgroundColor: index % 2 === 0 ? '#fff' : '#FAFAFA',
    '& td[type="actions"]': {
      opacity: 0,
      transition: 'opacity 0.06s'
    },
    '&:hover td[type="actions"]': {
      opacity: 1
    }
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