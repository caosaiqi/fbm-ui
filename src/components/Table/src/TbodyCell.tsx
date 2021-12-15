import React from 'react';

import styled from '@mui/material/styles/styled'
import { TableCell } from '@mui/material'

import { FbmTdColumnProps } from '../types'
import { isEmpty } from '../../../utils'


interface RootProps {
  type?: FbmTdColumnProps['type'];
  width?: FbmTdColumnProps['width'];
} 

const TableCellRoot: React.FC<RootProps> = styled(TableCell)(({ type }) => {
  return {
    padding: '16px',
    fontSize: 14,
    borderBottom: '1px solid #f4f4f4',
    ...(type === 'actions' && {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
    })
  }
})

const CellEmpty: React.FC = () => {
  return <span>-</span>
}

const TbodyCell: React.FC<FbmTdColumnProps> = ({
  type,
  id,
  width,
  row,
  render,
}) => {
  const cell = row[id]
  const isEmptyValue = isEmpty(cell)

  const Cell: React.FC = () => {
    // 处理自定义render返回
    if (render) {
      return render({ cell, row })
    }

    // 处理空字段
    if (isEmptyValue) {
      return <CellEmpty />
    }

    return cell
  }

  const rootProps = {
    type,
    width
  }
  return (
    <TableCellRoot {...rootProps}>
      <Cell />
    </TableCellRoot>
  )
}

export default TbodyCell