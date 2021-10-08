import * as React from 'react'
import { Alert } from "../../../../../src"

const alerts = {
  'success': '这是一个Success提醒',
  'error': '这是一个Error提醒',
  'warning': '这是一个Warning提醒',
  'info': '这是一个Info提醒',
}

export default () => Object.keys(alerts).map(k => (
  <Alert sx={{ m: 4, width: 700 }} type={k} key={k}> {alerts[k]}  {k}</Alert>
))