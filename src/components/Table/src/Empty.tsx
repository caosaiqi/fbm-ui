import React from 'react';
import { TableRow, TableCell } from '@mui/material'
import Empty from '../../Empty'

interface TableEmpty {
  desc?: string;
  colSpan?: number;
}

const TableEmpty: React.FC<TableEmpty> = ({ colSpan, desc }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        <Empty desc={desc}/>
      </TableCell>
    </TableRow>
  )
};

export default TableEmpty