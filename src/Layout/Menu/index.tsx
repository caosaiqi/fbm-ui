import * as React from 'react';
import { Paper } from '@mui/material'
import styled from '@mui/material/styles/styled'
import useThemeProps from '@mui/material/styles/useThemeProps'

import HoverMenu, { HoverMenuProps } from './HoverMenu'

export const componentName: string = 'LayoutMenu'

export interface MenuPrpos extends HoverMenuProps {
  // closedWidth?: number;
  // openWidth?: number;
}

const MenuRoot = styled(Paper, {
  name: 'LayoutMenu',
  slot: 'root',
  overridesResolver: (_, styles) => styles.root,
})({
  width: 52,
})

const LayoutMenu: React.FC<MenuPrpos> = (inProps) => {
  const { menus } = useThemeProps({ props: inProps, name: componentName })

  return (
    <MenuRoot>
      <HoverMenu menus={menus}/>
    </MenuRoot>
  )
}

export default LayoutMenu
