import React from 'react';
import { TableContainer, Paper } from '@mui/material'

import Table from './src/Table'
import Thead, { FbmTheadProps } from './src/Thead'
import Tbody, { TbodyProps } from './src/Tbody'

interface FbmTableProps {
  align: string;
  data: TbodyProps['data'];
  columns: FbmTheadProps['columns'];
}

const FbmTable: React.FC<FbmTableProps> = React.forwardRef(({
  data,
  columns,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <Thead columns={columns} />
        <Tbody data={data} columns={columns} />
      </Table>
    </TableContainer>
  )
})


FbmTable.defaultProps = {
  align: 'left',
  columns: []
}

export default FbmTable