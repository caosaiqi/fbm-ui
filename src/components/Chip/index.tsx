import React from 'react'
import styled from '@mui/material/styles/styled'
import { Chip, ChipProps, chipClasses } from '@mui/material'

type SizeMap = 'small' | 'medium' | 'large';

const ChipRoot: React.FC<ChipProps> = styled(Chip)(({ size }) => {
  return {
    [`& .${chipClasses.label}`]: {
      paddingLeft: 11,
      paddingRight: 11,
      fontSize: 14,
      lineHeight: 1,
    },
    ...(size === 'small' && {
      height: '18px',
      [`& .${chipClasses.labelSmall}`]: {
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 12,
      },
    }),
    ...(size === 'medium' && {
      height: '24px',
      [`& .${chipClasses.labelMedium}`]: {
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 12,
      },
      [`& .${chipClasses.deleteIconMedium}`]: {
        fontSize: 14,
      },
    }),
    ...((size as SizeMap) === 'large' && {
      height: '32px',

      [`& .${chipClasses.deleteIcon}`]: {
        fontSize: 18,
      },
    })
  }
})

ChipRoot.defaultProps = {
  variant: 'outlined',
  size: 'medium',
}

export default ChipRoot