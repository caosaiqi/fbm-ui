import React from 'react';
import PopupState, { InjectedProps, bindPopover } from 'material-ui-popup-state'
import { Box } from '@mui/material'

import Trigger, { TriggerMap } from './src/Trigger'
import Popover from './src/Popover'

export type Variant = 'popover' | 'popper';

export interface FbmPopoverProps {
  popupId?: string;
  content?: React.ReactNode | (() => React.ReactNode);
  variant?: Variant;
  children?: React.ReactNode | (() => React.ReactNode);
  trigger?: TriggerMap
  open?: boolean
}

const FmbPopover: React.FC<FbmPopoverProps> = React.forwardRef((props, ref) => {
  const { variant, children, trigger, content } = props

  return (
    <PopupState variant={variant}>
      {(popupState: InjectedProps) => {
        return (
          <Box ref={ref}>
            <Trigger trigger={trigger} popupState={popupState}>
              {children}
            </Trigger>
            <Popover popupState={popupState}>
              {content}
            </Popover>
          </Box>
        )
      }}
    </PopupState>
  )
})


FmbPopover.defaultProps = {
  variant: 'popover',
  popupId: `popover${new Date().getTime()}`,
  trigger: 'click',
}

export default FmbPopover