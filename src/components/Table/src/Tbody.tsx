import React from 'react';
import { TableBody } from '@mui/material'

import { isEmpty } from '../../../utils'
import Empty from './Empty'
import TbodyRow from './TbodyRow'
import TbodyCell  from './TbodyCell'
import { FbmTbodyProps } from '../types'


const Tbody: React.FC<FbmTbodyProps> = ({
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
        key={index}
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

    return <>{rows}</>
  }

  return (
    <TableBody>
      <RowsRender />
      <EmptyRender />
    </TableBody>
  )
}

export default Tbody