import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableHead, TableRow } from '@mui/material'

import TheadCell, { TheadCellProps } from './TheadCell'

export interface FbmTheadProps {
  columns: TheadCellProps[];
  batchActions?: TheadCellProps['batchActions']
  selectedText?: TheadCellProps['selectedText']
}

const TableHeadRoot = styled(TableHead)({
  backgroundColor: '#fafafa',
  position: 'relative',
})

const FbmThead: React.FC<FbmTheadProps> = ({
  columns,
  selectedText,
  batchActions
}) => {
  return (
    <TableHeadRoot>
      <TableRow>
        {columns.map((columnItem) => {
          return <TheadCell key={columnItem.id} {...columnItem} batchActions={batchActions} selectedText={selectedText} />
        })}
      </TableRow>
    </TableHeadRoot>
  )
}

export default FbmThead