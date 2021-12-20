import React from 'react';
import { TableContainer } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Table from './src/Table'
import Thead from './src/Thead'
import Tbody from './src/Tbody'
import Loading from './src/Loading'
import Pagination from './src/Pagination'
import { FbmTableProps } from './types'

const Container = styled(TableContainer)({
  position: 'relative'
})

const FbmTable: React.FC<FbmTableProps> =({
  loading,
  data,
  pagination,
  columns,
  batchActions,
  nameText,
}) => {

  const TheadProps = {
    data,
    nameText,
    columns,
    batchActions
  }

  const TbodyProps = {
    data,
    columns
  }

  const loadingProps = {
    loading,
    nameText
  }

  return (
    <Container>
      <Table>
        <Thead {...TheadProps} />
        <Tbody {...TbodyProps} />
      </Table>
      <Loading {...loadingProps} />
      <Pagination {...pagination} />
    </Container>
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