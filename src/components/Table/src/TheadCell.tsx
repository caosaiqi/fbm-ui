import React from 'react';
import styled from '@mui/material/styles/styled'
import { TableCell, Box } from '@mui/material'

import Typography from '../../Typography'
import { isEmpty } from '../../../utils'
import Actions, { FbmActionProps } from '../../Actions'
import { ColumnProps }  from '../types'

const TableCellRoot = styled(TableCell)({
  height: 54,
  padding: '0 16px',
  borderBottom: '1px solid #f4f4f4',
})
interface ActionRootProps{
  selected: ColumnProps['selected']
}

const ActionRoot: React.FC<ActionRootProps> = styled(Box)(({ selected }) => {
  const isSelected = selected && selected.length > 0
  return {
    position: 'absolute',
    left: 60,
    top: 0,
    right: 0,
    display: isSelected ? 'flex' : 'none',
    zIndex: 1,
    height: 54,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  }
})

const ActionText: React.FC = styled(Typography)({
  color: '#4BB051',
  fontSize: '13px',
  fontWeight: 400,
  marginRight: 10,
  marginLeft: 5,
})

const TheadCell: React.FC<ColumnProps> = ({
  label,
  type,
  data,
  selected,
  nameText,
  batchActions,
  thReader,
}) => {
  if (thReader === null) return null
  const Cell: React.FC = () => {
    //处理自定义render返回
    if (thReader) {
      return <>{thReader({ data })}</>
    }
    return (
      <Typography color='secondary' weight="medium" variant='body2'>
        {label}
      </Typography>
    )
  }

  const CheckActions: React.FC<FbmActionProps> = () => {
    if (type !== 'checkbox') return null
    if (isEmpty(batchActions)) return null
    const len = selected.length

    const text = () => {
      let defaultText = `已选择${len}个`
      if (nameText) {
        if (typeof nameText === 'string') return `${defaultText}${nameText}`
        if (typeof nameText === 'function') return nameText('checkbox')
      }
      return defaultText
    }
    return (
      <ActionRoot selected={selected}>
        <ActionText>
          {text()}
        </ActionText>
        <Actions actions={batchActions} data={selected} />
      </ActionRoot>
    )
  }

  return (
    <TableCellRoot>
      <Cell />
      <CheckActions />
    </TableCellRoot>
  )
}

export default TheadCell