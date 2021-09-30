// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Button, confirm } from "../../../../../src"

const types = ['error', 'warning', 'success', 'info']
const params = {
  'error': {
    title: '错误弹框',
    content: '该候选人长时间未开始面试，建议发送短信提醒',
  },
}
export default () => {
  const handleClick = () => {
    confirm({
      title: '确认？',
      content: '该候选人长时间未开始面试，建议发送短信提醒',
    })
  }
  return [
    <Button onClick={() => handleClick()} key={type}> {type}</Button>,
  ]
}