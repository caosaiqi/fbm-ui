import React from 'react';

import styled from '@mui/material/styles/styled'
import { TableCell } from '@mui/material'
import Actions, { FbmActionProps } from '../../Actions'

export interface TbodyRowActionsProps extends FbmActionProps { }

const TableCellRoot = styled(TableCell)({
  padding: '16px',
  fontSize: 14,
  display: 'flex',
  width: 20,
  
})

const TbodyCellActions: React.FC<TbodyRowActionsProps> = (props) => {
  const { actions } = props

  return (
    <TableCellRoot>
      <Actions actions={actions} />
    </TableCellRoot>
  )
}

export default TbodyCellActions