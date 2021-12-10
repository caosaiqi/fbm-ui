import React from 'react';
import styled from '@mui/material/styles/styled'
import { MenuItem, Box, ListItemIcon, ListSubheader } from '@mui/material'

import Popover, { FbmPopoverProps } from '../Popover'
import { FbmButtonProps } from '../Button'

export interface PropsType extends FbmPopoverProps {
  actions?: FbmButtonProps[]
}

interface ActionMenusTitle {
  title?: string
}
interface ActionMenuItemProps extends FbmButtonProps {
  text?: string;
  icon?: FbmButtonProps['startIcon'];
  title?: ActionMenusTitle['title'];
  actions?: ActionMenuItemProps[];
  onClick: any
}

interface ActionsMenu {
  actions: ActionMenuItemProps[];
  onClose: () => void;
}

const MenuItemRoot = styled(MenuItem)({
  fontSize: 14,
  padding: '7px 16px'
})

const ActionMenuItem: React.FC<ActionMenuItemProps> = ({
  children,
  icon,
  onClick,
}) => {
  return (
    <MenuItemRoot onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {children}
    </MenuItemRoot>
  )
}

const ActionMenu: React.FC<ActionsMenu> = (props) => {
  const { actions, ...popupProps } = props;

  const getMenuItems = (actions) => actions.map(actionsItem => {
    const { text, icon, onClick, actions, } = actionsItem
    if (actions && actions.length) {
      return [
        <ListSubheader>
          {text}
        </ListSubheader>,
        ...getMenuItems(actions)
      ]
    }

    const handleMenuItemClick = () => {
      if (onClick && typeof onClick === 'function') {
        onClick(popupProps)
      }
    }

    return (
      <ActionMenuItem icon={icon} onClick={handleMenuItemClick}>
        {text}
      </ActionMenuItem>
    )
  })

  return (
    <Box sx={{ minWidth: 40 }}>
      {getMenuItems(actions)}
    </Box>
  )
}

const Popactions: React.FC<PropsType> = (props) => {
  const { children, actions, ...popoverProps } = props
  const content = (popupProps) => <ActionMenu {...popupProps} actions={actions} />

  return (
    <Popover
      content={content}
      {...popoverProps}
    >
      {children}
    </Popover>
  )
}

Popactions.defaultProps = {
  trigger: 'click',
  actions: [],
}

export default Popactions