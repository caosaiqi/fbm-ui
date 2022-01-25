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
export interface FbmPopoverProps {
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
  onClose?: TooltipProps['onClose'];
  /** 弹框背景色 */
  bgColor?: string
  /** 点击除弹框外其他区域弹框消失 */
  isAway?: boolean;
  children: TooltipProps['children'];
}

interface ClickWrapProps extends ClickAwayListenerProps {
  trigger: FbmPopoverProps['trigger'];
  isAway?: FbmPopoverProps['isAway'];
}

interface UseOpen {
  ({ open, trigger }: { open: FbmPopoverProps['open']; trigger: TriggerMap })
    : [boolean, (open: boolean) => void]
};

const PopoverRoot: React.FC<TooltipProps> = styled((inProps) => {
  const { className, ...props } = (inProps as TooltipProps)
  return (
    <Tooltip
      {...props}
      classes={{ popper: className }}
    />
  )
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0px 1px 10px 0px rgb(0 0 0 / 12%)',
    padding: 0,
    maxWidth: '100%',
  },
  [`& .${tooltipClasses.arrow}:before`]: {
    color: '#fff',
    boxShadow: '0px 0px 1px 0px rgb(0 0 0 / 12%)',
  },
}));

const PopoverContent = styled('div')({
  display: 'inline-block',
})

const ClickWrapRoot = styled('div')({
  display: 'inline-block',
})

const ClickWrap: React.FC<ClickWrapProps> = ({ trigger, children, isAway, ...props }) => {
  if (trigger !== 'click' || isAway === false) return children
  return (
    <ClickAwayListener {...props}>
      <ClickWrapRoot>
        {children}
      </ClickWrapRoot>
    </ClickAwayListener>
  )
}

const useOpen: UseOpen = ({
  open: openProp,
  trigger
}) => {
  const [open, setOpen] = React.useState(() => {
    // 强制控制open
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

const FmbPopover: React.FC<FbmPopoverProps> = React.forwardRef((props, ref) => {
  const {
    open: openProp,
    content: contentProp,
    arrow,
    trigger,
    placement,
    children,
    onClose,
    isAway,
    ...other
  } = props

  const [open, setOpen] = useOpen({
    open: openProp,
    trigger
  })

  const hanldeClose = (event: Event) => {
    setOpen(false)
    if (isFunction(onClose)) {
      onClose(event)
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const disableListeners = {
    disableFocusListener: trigger !== 'focus',
    disableHoverListener: trigger !== 'hover',
    disableTouchListener: true,
  }

  let content = null
  if (typeof contentProp === 'function') {
    content = contentProp({
      hanldeClose,
      handleOpen,
    })
  } else {
    content = contentProp
  }

  return (
    <ClickWrap
      isAway={isAway}
      trigger={trigger}
      onClickAway={hanldeClose}
    >
      <PopoverRoot
        ref={ref}
        open={open}
        arrow={arrow}
        placement={placement}
        onClose={hanldeClose}
        title={content}
        onClick={handleOpen}
        {...disableListeners}
        {...other}
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
  isAway: true,
}

export default FmbPopover