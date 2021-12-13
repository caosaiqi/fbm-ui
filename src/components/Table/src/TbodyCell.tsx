import React from 'react';

import styled from '@mui/material/styles/styled'
import { TableCell, TableCellProps } from '@mui/material'

import { isEmpty } from '../../../utils'

export interface RenderProps {
  cell: any;
  row: object;
}

export interface TbodyCellProps extends TableCellProps {
  type?: string;
  id?: string;
  label?: string;
  row?: object;
  width?: string | number;
  render?: (props: RenderProps) => any;
  thReader?: any;
}

const TableCellRoot: React.FC<TbodyCellProps> = styled(TableCell)(({ type }) => {
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

const TbodyCell: React.FC<TbodyCellProps> = (props) => {
  const { id, row, render, ...tableCellProps } = props
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

  return (
    <TableCellRoot {...tableCellProps}>
      <Cell />
    </TableCellRoot>
  )
}

export default TbodyCell