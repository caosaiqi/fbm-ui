import React from 'react';
import { Drawer, DrawerProps, drawerClasses} from '@mui/material'
import styled from '@mui/material/styles/styled'

export interface FbmDrawerRootProps extends DrawerProps{
  zIndex?: number
}

const FbmDrawerRoot: React.FC<FbmDrawerRootProps> = styled(Drawer)(({
  zIndex,
}) => {
  return {
    zIndex,
    [`& .${drawerClasses.paperAnchorRight}`]: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    }
  }
})

FbmDrawerRoot.defaultProps = {
  zIndex: 1300,
  anchor: 'right'
}

export default FbmDrawerRoot
