import React from 'react';
import { InjectedProps, bindPopover } from 'material-ui-popup-state'
import { Popover as ClickPopover } from '@mui/material'
import HoverPopover from 'material-ui-popup-state/HoverPopover'

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

  const Popovers = {
    click: ClickPopover,
    hover: HoverPopover
  }

  const Popover = Popovers['trigger'] || ClickPopover

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