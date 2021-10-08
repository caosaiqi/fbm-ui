import * as React from 'react';
import { List, ListItemButton, ListItemText, ListItemIcon, Paper } from '@material-ui/core'

import styles from './styles'

interface MenuItemProps {
  selected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export interface MenuPrpos {
  menus?: MenuItemProps[];
  closedWidth?: number;
  openWidth?: number;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    title,
    selected,
    icon,
    onClick,
  } = props
  
  const Icon = () => {
    if (!icon) return null
    return <ListItemIcon className='icon'> {icon} </ListItemIcon>
  }

  const Title = () => {
    if (!title) return null
    return <ListItemText className='title' primary={title} />
  }

  const handleClick = (e) => {
    if (onClick && typeof onClick === 'function') {
      onClick(e)
    }
  }

  return (
    <ListItemButton
      component='li'
      sx={styles.listItemButton}
      selected={selected}
      onClick={handleClick}
    >
      <Icon />
      <Title />
    </ListItemButton>
  )
}

const Menu: React.FC<MenuPrpos> = ({ menus }) => (
  <Paper
    sx={styles.menu}
    elevation={0}
    square
  >
    <List className='menu-list'>
      {menus.map((item) => <MenuItem key={item.title} {...item} />)}
    </List>
  </Paper>
)


export default Menu
