import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableBody, TableRow } from '@mui/material'

import { isEmpty } from '../../../utils'
import Empty from './Empty'
import TbodyRow from './TbodyRow'
import TbodyCell, { TbodyCellProps } from './TbodyCell'

export interface TbodyProps {
  columns: TbodyCellProps[];
  data: object[];
}


const Tbody: React.FC<TbodyProps> = ({
  data,
  columns,
}) => {
  const EmptyRender: React.FC = () => {
    if (isEmpty(data)) return <Empty />
    return null
  }

  const RowsRender: React.FC = () => {
    if (isEmpty(data)) return null
    const rows = data.map((row, index) => (
      <TbodyRow
        index={index}
      >
        {columns.map((columnItem) => (
          <TbodyCell
            key={columnItem.id}
            row={row}
            {...columnItem}
          />
        ))}
      </TbodyRow>
    ))

    return <> {rows} </>
  }

  return (
    <TableBody>
      <RowsRender />
      <EmptyRender />
    </TableBody>
  )
}

export default Tbody