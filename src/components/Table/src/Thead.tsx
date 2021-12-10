import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableHead, TableRow } from '@mui/material'

import TheadCell, { TheadCellProps } from './TheadCell'

export interface FbmTheadProps {
  columns: TheadCellProps[],
}

const TableHeadRoot = styled(TableHead)({
  backgroundColor: '#F9FAF9'
})

const FbmThead: React.FC<FbmTheadProps> = ({
  columns
}) => {
  return (
    <TableHeadRoot>
      <TableRow>
        {columns.map((columnItem) => <TheadCell key={columnItem.id} {...columnItem} />)}
      </TableRow>
    </TableHeadRoot>
  )
}

export default FbmThead