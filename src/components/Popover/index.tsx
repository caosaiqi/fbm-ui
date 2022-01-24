import React from 'react';
import { styled } from '@mui/system';
import {
  Tooltip,
  TooltipProps,
  ClickAwayListener,
  tooltipClasses,
  ClickAwayListenerProps
} from '@mui/material'

import { isFunction } from '../../utils'

type TriggerMap = 'click' | 'hover' | 'focus'
export interface FmbPopoverProps {
  title: TooltipProps['title'];
  /** 是否显示弹框 */
  open?: TooltipProps['open'];
  /** 弹框内容 */
  content?: TooltipProps['title'];
  /** 是否需要三角▶️ */
  arrow?: TooltipProps['arrow'];
  /** 触发行为 */
  trigger?: TriggerMap;
  /** 弹框位置 */
  placement?: TooltipProps['placement'];
  /** 弹框关闭回调 */
  onClose: TooltipProps['onClose'];
  /** 弹框背景色 */
  bgColor?: string
  children: TooltipProps['children'];
}

interface ClickWrapProps extends ClickAwayListenerProps {
  trigger: FmbPopoverProps['trigger'];
}

const PopoverRoot: React.FC<TooltipProps> = styled(({ className, ...props }) => {
  return <Tooltip {...props} classes={{ popper: className }} />
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    // color: theme.palette.common.white,
    // boxShadow: theme.shadows[1],
  },
}));

const PopoverContent = styled('div')({
  display: 'inline-block',
})

const ClickWrap: React.FC<ClickWrapProps> = ({ trigger, children, ...props }) => {
  if (trigger !== 'click') return children
  return (
    <ClickAwayListener {...props}>
      <div>
        {children}
      </div>
    </ClickAwayListener>
  )
}

function useOpen({
  open: openProp,
  trigger
}) {
  const [open, setOpen] = React.useState(() => {
    // 组件内open
    if (trigger === 'click') {
      return !!openProp
    }
    // 如何open是undefined则交给mui Tooltip 处理
    return openProp
  })

  const handleSetOpen = (isOpen: boolean) => {
    if (trigger === 'click') {
      setOpen(isOpen)
    }
  }

  return [open, handleSetOpen]
}

const FmbPopover: React.FC<FmbPopoverProps> = React.forwardRef((props, ref) => {
  const {
    open: openProp,
    content,
    arrow,
    trigger,
    placement,
    children,
    onClose,
  } = props
  const [open, setOpen] = useOpen(props)

  const hanldeClose = (event: Event) => {
    if (openProp === undefined) {
      setOpen(false)
    }
    if (isFunction(onClose)) {
      onClose(event)
    }
  }

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <ClickWrap
      trigger={trigger}
      onClickAway={hanldeClose}
    >
      <PopoverRoot
        open={open}
        arrow={arrow}
        title={content}
        placement={placement}
        onClose={hanldeClose}
        onClick={handleClick}
      >
        <PopoverContent>
          {children}
        </PopoverContent>
      </PopoverRoot>
    </ClickWrap>
  )
})

FmbPopover.defaultProps = {
  placement: 'bottom',
  trigger: 'click',
  onClose: undefined,
  arrow: true,
  content: null,
  children: null,
}

export default FmbPopover