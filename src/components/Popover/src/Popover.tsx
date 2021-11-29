import React from 'react';
import PopupState, { InjectedProps, bindPopover } from 'material-ui-popup-state'
import { Popover, Box } from '@mui/material'

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}

export interface FbmPopoverProps {
  popupState?: InjectedProps
  anchorOrigin?: PopoverOrigin
}


const FbmPopover: React.FC<FbmPopoverProps> = React.forwardRef((props, ref) => {
  const { popupState, children, ...otherProps} = props

  const popoverProps = {
    ...(popupState && bindPopover(popupState)),
    ...otherProps,
  }

  return (
    <Popover {...popoverProps}>
      {typeof children === 'function' ? children(popoverProps) : children}
    </Popover>
  )
})


FbmPopover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  }
}

export default FbmPopover