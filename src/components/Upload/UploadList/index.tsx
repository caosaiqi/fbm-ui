import React from 'react'
import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled'

import { UploadListProps, UploadFile } from '../types'
import ListItem from './ListItem'

const UploadListRoot = styled(Box)({})

const FbmUploadList: React.FC<UploadListProps> = props => {
  const {
    items,
    onRemove,
    onRefresh,
    itemRender
  } = props

  const handleClose = (file: UploadFile) => onRemove(file)
  const handleRefresh = (file: UploadFile) => onRefresh(file)

  return (
    <UploadListRoot>
      {(items || []).map((item) => {
        const listItemProps = {
          name: item.name,
          percent: item.percent,
          status: item.status,
          onClose: () => handleClose(item),
          onRefresh: () => handleRefresh(item)
        }

        let children: React.ReactNode = null
        if (itemRender && typeof itemRender === 'function') {
          children = itemRender(listItemProps)
        } else {
          children = (
            <ListItem
              name={item.name}
              percent={item.percent}
              status={item.status}
              onClose={() => handleClose(item)}
              onRefresh={() => handleRefresh(item)}
            />
          )
        }
        return (
          <span key={item.uid}>
            {children}
          </span>
        )
      })}
    </UploadListRoot>
  )
}
export default FbmUploadList