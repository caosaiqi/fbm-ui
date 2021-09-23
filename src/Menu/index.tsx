import * as React from 'react';
import { Box, List, ListItemButton, ListItemText, ListItemIcon, Duration } from '@material-ui/core'

import styles from './styles'

interface MenuItemProps {
    title?: string,
    selected?: boolean
}
export interface MenuPrpos {
    menus?: MenuItemProps[]
    selected?: number
}

const MenuItem: React.FC<MenuItemProps> = ({
    title,
    selected,
}) => (
    <ListItemButton selected={selected}>
        <ListItemIcon>
            <Duration />
        </ListItemIcon>
        <ListItemText primary={title} />
    </ListItemButton>
)

const Menu: React.FC<MenuPrpos> = ({ menus }) => (
    <Box sx={styles.menu}>
        <List>
            {menus.map((item) => <MenuItem key={item.title} {...item} />)}
        </List>
    </Box>
)

export default Menu
