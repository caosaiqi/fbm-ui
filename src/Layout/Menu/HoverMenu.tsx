import * as React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

interface MenuItemProps {
  selected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface HoverMenuProps {
  menus?: MenuItemProps[]
}

const MenuRoot = styled(List, {
  slot: 'root',
  name: 'AlayoutHoverMenu',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  padding: 0,
  margin: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}))

const MenuItemRoot = styled(ListItemButton)(({ selected }) => ({
  ...(
    selected && {
      background: 'linear-gradient(90deg,#71D376 0%,#4BB051 100%)',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
      '& .MuiListItemText-root': {
        color: '#fff',
      },
    }
  ),
}))

const MenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

const MenuItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
}))

const MenuItem: React.FC<MenuItemProps> = ({ title, icon, ...otheProps }) => (
  <MenuItemRoot className='MenuItemRoot' {...otheProps}>
    <MenuItemIcon>
      {icon}
    </MenuItemIcon>
    <MenuItemText>
      {title}
    </MenuItemText>
  </MenuItemRoot>
)

const HoverMenu: React.FC<HoverMenuProps> = (props) => {
  const { menus } = props

  if (!menus) return null

  const menuItems = menus.map((menu) => <MenuItem key={menu.title} {...menu} />)

  return (
    <MenuRoot className='MenuRoot'>
      {menuItems}
    </MenuRoot>
  )
}

export default HoverMenu