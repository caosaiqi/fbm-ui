import React from 'react';
import { MenuItem, Box} from '@mui/material'

import Popover, { FbmPopoverProps } from '../Popover'
import { FbmButtonProps } from '../Button'

export interface PropsType extends FbmPopoverProps {
  actions?: FbmButtonProps[]
}

interface ActionsMenu {
  actions: FbmButtonProps[];
  onClose: () => void;
}


const ActionMenu: React.FC<ActionsMenu> = (props) => {
  const { actions, ...popupProps} = props;
  const { onClose } = popupProps

  const menuItems = actions.map(actionsItem => {
    const {text, onClick} = actionsItem
    const handleClick = async (event) => {
      if (onClick && typeof onClick === 'function') {
        onClick(event)
      }
      onClose()
    } 
    return (
      <MenuItem key={text} onClick={handleClick}> {text} </MenuItem>
    )
  })

  return (
    <Box sx={{minWidth: 200}}>
      {menuItems}
    </Box>
  )
}

const Popactions: React.FC<PropsType> = (props) => {
  const { children, actions, ...popoverProps } = props
  return (
    <Popover
       {...popoverProps} 
       content={(popupProps) => <ActionMenu {...popupProps} actions={actions} />}>
      {children}
    </Popover>
  )
}

Popactions.defaultProps = {
  trigger: 'click',
  actions: [],
}

export default Popactions