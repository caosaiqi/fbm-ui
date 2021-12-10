import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableCell, TableCellProps} from '@mui/material'

import Typography from '../../Typography'

export interface TheadCellProps {
  id?: string;
  label?: string;
  width?: string | number;
  thReader?: () => React.ReactNode | any;
}

const TableCellRoot = styled(TableCell)({
  height: 54,
  padding: '0 16px',
  borderBottom: '1px solid #f4f4f4',
})

const TheadCell: React.FC<TheadCellProps> = ({
  label,
  thReader,
  ...tableCellProps
}) => {
  const Cell: React.FC = () => {
    // 处理自定义render返回
    if (thReader) {
      return thReader()
    }
    return (
      <Typography color='secondary' weight="medium" variant='body2'>
        {label}
      </Typography>
    )
  }
  return (
    <TableCellRoot {...tableCellProps}>
      <Cell/>
    </TableCellRoot>
  )
}

export default TheadCell