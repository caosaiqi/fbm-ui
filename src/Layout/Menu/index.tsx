import * as React from 'react';
import { Paper } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

import HoverMenu, { HoverMenuProps } from './HoverMenu'

export const componentName: string = 'AlayoutMenu'

export interface MenuPrpos extends HoverMenuProps {
  // closedWidth?: number;
  // openWidth?: number;
}

const MenuRoot = styled(Paper, {
  name: 'AlayoutMenu',
  slot: 'root',
  overridesResolver: (_, styles) => styles.root,
})({
  width: 52,
})

const AlayoutMenu: React.FC<MenuPrpos> = (inProps) => {
  const { menus } = useThemeProps({ props: inProps, name: componentName })

  return (
    <MenuRoot>
      <HoverMenu menus={menus}/>
    </MenuRoot>
  )
}

export default AlayoutMenu
