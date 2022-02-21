import React from 'react'
import styled from '@mui/material/styles/styled'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip';

import { RefreshIcon, CancelIcon } from '../../icons'
import Typography from '../../Typography'
import { FileIcons, getFileFormat } from '../utils'
import {
  UploadFile,
} from '../types';

interface ListItemProps {
  /** 文件名称 */
  name?: UploadFile['name'];
  /** 上传进度 */
  percent: UploadFile['percent'];
  /** 文件上传状态 */
  status: UploadFile['status'];
  /** 取消上传 */
  onClose: (file?: UploadFile) => void;
  /** 重新上传 */
  onRefresh: (file?: UploadFile) => void;
}

const FlexCenterBox = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})

const FlexFill = styled(Box)({
  flex: 1,
})

const ActionIconBox = styled('span')({
  position: 'absolute',
  right: '0',
  top: '-11px',
  cursor: 'pointer',
})

const FileName = styled(Typography)({
  color: 'rgba(0, 0, 0, 0.87)',
  fontSize: '0.875rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  lineHeight: '22px',
})

interface ActionIconSpanProps {
  status: ListItemProps['status']
}
const ActionIconSpan: React.FC<ActionIconSpanProps> = styled('span')(({ status, theme }) => ({
  ...(status === 'error' && {
    color: theme.palette.error.main
  }),
  ...(status === 'uploading' && {
    color: theme.palette.info.main
  }),
}))

const HelperText = styled(Typography)({
  fontSize: '0.75rem',
  lineHeight: '22px',
})

const ListItem: React.FC<ListItemProps> = props => {
  const {
    name,
    percent,
    status,
    onClose,
    onRefresh,
  } = props

  const fileFormat: string = getFileFormat(name)
  const FileIcon: React.FC<any> = FileIcons[fileFormat] ||  FileIcons['undefined']

  const StatusIcons = {
    uploading: (
      <Tooltip title={'取消上传'} placement="top">
        <ActionIconSpan status={status}>
          <CancelIcon onClick={() => onClose()} />
        </ActionIconSpan>
      </Tooltip>
    ),

    error: (
      <Tooltip title={'重新上传'} placement="top">
        <ActionIconSpan status={status}>
          <RefreshIcon onClick={() => onRefresh()} />
        </ActionIconSpan>
      </Tooltip>
    ),
  }
  const statusIcon: React.ReactNode = StatusIcons[status] || null

  const progressColors = {
    uploading: 'info',
    error: 'error',
    done: 'success'
  }

  return (
    <FlexCenterBox sx={{ mt: '5px' }}>
      <FileIcon sx={{
        mr: 1,
        position: 'relative',
        top: '3px',
      }} />
      <FlexFill>
        <FileName>{name}</FileName>
        <FlexCenterBox sx={{ flex: 1, position: 'relative' }}>
          <LinearProgress
            sx={{
              width: '100%',
              mr: '25px',
            }}
            variant='determinate'
            value={percent}
            color={progressColors[status]}
          />
          <ActionIconBox>
            {statusIcon}
          </ActionIconBox>
        </FlexCenterBox>
        <HelperText>

        </HelperText>
      </FlexFill>
    </FlexCenterBox>
  )
}

export default ListItem