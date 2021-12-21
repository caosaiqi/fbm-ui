import React from 'react';

import PopupState, { InjectedProps, bindPopover } from 'material-ui-popup-state'
import { Box } from '@mui/material'

import Trigger, { TriggerMap } from './src/Trigger'
import Popover from './src/Popover'

export type Variant = 'popover' | 'popper';

export interface FbmPopoverProps {
  open?: boolean
  popupId?: string;
  trigger?: TriggerMap;
  variant?: Variant;
  content?: React.ReactNode | (() => React.ReactNode);
  children?: React.ReactNode | (() => React.ReactNode);
}

const FmbPopover: React.FC<FbmPopoverProps> = React.forwardRef((props, ref) => {
  const { popupId, variant, children, trigger, content } = props

  return (
    <PopupState popupId={popupId} variant={variant}>
      {(popupState: InjectedProps) => {
        return (
          <Box>
            <Trigger children={children} trigger={trigger} popupState={popupState} />
            <Popover
              {...bindPopover(popupState)}
            >
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