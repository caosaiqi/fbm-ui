import React from 'react';
import { TableRow, TableCell } from '@mui/material'
import Empty from '../../Empty'

interface TableEmpty {
  desc?: string;
  colSpan?: number;
  src?: string;
}

const TableEmpty: React.FC<TableEmpty> = ({ colSpan, desc, src }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Empty desc={desc} src={src}/>
      </TableCell>
    </TableRow>
  )
};

export default TableEmpty