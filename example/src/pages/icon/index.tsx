import * as React from 'react'
import { Aicon } from "../../../../src"

export default () => (
  <div>
    <Aicon name="ErrorIcon" color="error" />
    <Aicon name="WarningIcon" htmlColor="yellow"  />
    <Aicon name="InfoIcon"  fontSize="small" color="info" />
    <Aicon name="CheckIcon" color="success" />
  </div>
)