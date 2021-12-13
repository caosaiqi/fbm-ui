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
  return (
    <TableContainer component={Paper}>
      <Table>
        <Thead selectedText={selectedText} columns={columns} batchActions={batchActions} />
        <Tbody data={data} columns={columns} />
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