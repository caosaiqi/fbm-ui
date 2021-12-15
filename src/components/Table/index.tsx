import React from 'react';
import { TableContainer } from '@mui/material'

import Table from './src/Table'
import Thead from './src/Thead'
import Tbody from './src/Tbody'
import Pagination from './src/Pagination'
import { FbmTableProps } from './types'

const FbmTable: React.FC<FbmTableProps> =({
  data,
  pagination,
  columns,
  batchActions,
  selectedText,
}) => {
  const TheadProps = {
    data,
    selectedText,
    columns,
    batchActions
  }

  const TbodyProps = {
    data,
    columns
  }

  return (
    <TableContainer>
      <Table>
        <Thead {...TheadProps} />
        <Tbody {...TbodyProps} />
      </Table>
      <Pagination {...pagination} />
    </TableContainer>
  )
}

FbmTable.defaultProps = {
  align: 'left',
  columns: [],
  pagination: {
    total: 0
  }
}

export default FbmTable