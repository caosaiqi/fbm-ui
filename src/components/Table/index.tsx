import React from 'react';
import { TableContainer, Box } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Table from './src/Table'
import Thead from './src/Thead'
import Tbody from './src/Tbody'
import Loading from './src/Loading'
import Pagination from './src/Pagination'
import { FbmTableProps } from './types'

const Root = styled(Box)({
  position: 'relative',
  overflow: 'hidden'
})

const FbmTable: React.FC<FbmTableProps> = ({
  loading,
  data,
  emptyText,
  columns,
  batchActions,
  nameText,
  PaginationProps,
  TableContainerProps,
}) => {
  
  return (
    <Root>
      <Loading 
        loading={loading}
        nameText={nameText}
      />
      <TableContainer {...TableContainerProps}>
        <Table>
          <Thead 
            data={data}
            nameText={nameText}
            columns={columns}
            batchActions={batchActions}
          />
          <Tbody 
            data={data}
            columns={columns}
            emptyText={emptyText}
            loading={loading}
          />
        </Table>
      </TableContainer>
      <Pagination {...PaginationProps} />
    </Root>
  )
}

FbmTable.defaultProps = {
  align: 'left',
  columns: [],
  PaginationProps: {
    total: 0
  },
  TableContainerProps: {},
}

export default FbmTable