import React from 'react';
import { Table } from '@mui/material'

interface FbmTableProps {}

const FbmTable:React.FC<FbmTableProps> = ({
  children
}) => {
  return (
    <Table>
      {children}
    </Table>
  )
}

export default FbmTable