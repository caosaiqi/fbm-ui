import React from 'react';
import { SpeedIcon } from '../../icons';
import styled from '@mui/material/styles/styled'
import { Box, TableRow, TableCell } from '@mui/material'

import Typography from '../../Typography'

const EmptyRoot: React.FC = styled(Box)()

const Icon: React.FC = styled(SpeedIcon)({
  fontSize: '5em',
})

const Text: React.FC = styled(Typography)({

})

Text.defaultProps = {
  color: 'secondary'
}

export default ({ colSpan }) => {
  return (
    <TableRow>
      <TableCell colSpan={12} align="center">
        <EmptyRoot>
          <Icon />
          <Text>
            暂无数据
          </Text>
        </EmptyRoot>
      </TableCell>
    </TableRow>
  )
};