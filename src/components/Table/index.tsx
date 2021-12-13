import React from 'react';
import { TableContainer, Paper } from '@mui/material'

import Table from './src/Table'
import Thead, { FbmTheadProps } from './src/Thead'
import Tbody, { TbodyProps } from './src/Tbody'
import Pagination, { FbmPaginationProps } from './src/Pagination'

interface FbmTableProps {
  align: string;
  data: TbodyProps['data'];
  columns: FbmTheadProps['columns'];
  batchActions?: FbmTheadProps['batchActions'];
  selectedText?: FbmTheadProps['selectedText'],
  pagination?: FbmPaginationProps
}

const FbmTable: React.FC<FbmTableProps> = React.forwardRef(({
  data,
  pagination,
  columns,
  batchActions,
  selectedText,
}) => {
  const TheadProps = {
    selectedText,
    columns,
    batchActions
  }
  
  const TbodyProps = {
    data,
    columns
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <Thead {...TheadProps} />
        <Tbody {...TbodyProps} />
      </Table>
      <Pagination {...pagination} />
    </TableContainer>
  )
})

FbmTable.defaultProps = {
  align: 'left',
  columns: [],
  pagination: {
    total: 0
  }
}

export default FbmTable