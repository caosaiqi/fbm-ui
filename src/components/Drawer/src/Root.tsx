import React from 'react';
import { Drawer } from '@mui/material'
import styled from '@mui/material/styles/styled'

export interface DrawerRootProps {
  zIndex?: number
}

const DrawerRoot: React.FC<DrawerRootProps> = styled(Drawer)(({ zIndex }) => ({ zIndex: zIndex | 1300 }))

export default DrawerRoot
