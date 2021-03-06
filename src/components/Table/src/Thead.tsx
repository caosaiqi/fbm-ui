import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableHead, TableRow } from '@mui/material'

import TheadCell from './TheadCell'
import { FbmTheadProps } from '../types'

const TableHeadRoot = styled(TableHead)({
  backgroundColor: '#fafafa',
  position: 'relative',
})

const FbmThead: React.FC<FbmTheadProps> = ({
  data,
  columns,
  nameText,
  batchActions
}) => {
  return (
    <TableHeadRoot>
      <TableRow>
        {columns.map((columnItem) => {
          return (
            <TheadCell
              key={columnItem.id}
              data={data}
              batchActions={batchActions}
              nameText={nameText}
              {...columnItem}
            />
          )
        })}
      </TableRow>
    </TableHeadRoot>
  )
}

export default FbmThead