import React from 'react';
import Popover from 'material-ui-popup-state/HoverPopover'
import PopupState, { InjectedProps, bindHover, bindPopover, bindTrigger } from 'material-ui-popup-state'
import { Box, Button, Typography } from '@mui/material'

import Trigger, { TriggerMap } from './src/Trigger'

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
  const { variant, children, trigger, content } = props

  return (
    <PopupState popupId={'adasdsadasd'} variant={variant}>
      {(popupState: InjectedProps) => {
        return (
          <Box>
            <Button variant="contained" {...bindHover(popupState)} >
              Open Popover
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Typography>
                The content of the Popover.
              </Typography>
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