import React from 'react';
import { TableContainer, Box, Paper } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Table from './src/Table'
import Thead from './src/Thead'
import Tbody from './src/Tbody'
import Loading from './src/Loading'
import Pagination from './src/Pagination'
import { FbmTableProps } from './types'

const Container = styled(TableContainer)()

const Root = styled(Box)({
  position: 'relative',
  overflow: 'hidden'
})

const FbmTable: React.FC<FbmTableProps> = ({
  loading,
  data,
  emptyText,
  pagination,
  columns,
  batchActions,
  nameText,
  tableContainerProps,
}) => {

  const TheadProps = {
    data,
    nameText,
    columns,
    batchActions
  }

  const TbodyProps = {
    data,
    columns,
    emptyText,
    loading,
  }

  const loadingProps = {
    loading,
    nameText
  }

  return (
    <Root>
      <Loading {...loadingProps} />
      <Container {...tableContainerProps}>
        <Table>
          <Thead {...TheadProps} />
          <Tbody {...TbodyProps} />
        </Table>
      </Container>
      <Pagination {...pagination} />
    </Root>
  )
}

FbmTable.defaultProps = {
  tableContainerProps: {},
  align: 'left',
  columns: [],
  pagination: {
    total: 0
  }
}

export default FbmTable