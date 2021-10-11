import * as React from 'react'
import { Icon } from "../../../../src"

export default () => (
  <div>
    <Icon name="ErrorIcon" color="error" />
    <Icon name="WarningIcon" htmlColor="yellow"  />
    <Icon name="InfoIcon"  fontSize="small" color="info" />
    <Icon name="CheckIcon" color="success" />
  </div>
)