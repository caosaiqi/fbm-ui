
import React from 'react'
import { InjectedProps, bindTrigger, bindHover, bindFocus } from 'material-ui-popup-state'

const BIND_EVNENTS = {
  'hover': bindHover,
  'click': bindTrigger,
  'focus': bindFocus
}

export type TriggerMap = 'hover' | 'focus' | 'click';

interface TriggerProps {
  children?: React.ReactNode | ((props: any) => React.ReactNode);
  popupState?: InjectedProps
  trigger?: TriggerMap
}

const FbmTrigger: React.FC<TriggerProps> = ({
  children,
  trigger,
  popupState
}) => {

  const events = BIND_EVNENTS[trigger](popupState)
  if (typeof children === 'function') {
    return <>{children(events)}</>
  }

  const cloneChildren = React.cloneElement((children as any), events)
  return <>{cloneChildren}</>
}

export default FbmTrigger