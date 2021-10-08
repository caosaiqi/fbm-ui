// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Button, Toast } from "../../../../../src"

const types = ['error', 'warning', 'success', 'info']
const msgs = {
  'error': '保存成功',
  'warning': '该候选人长时间未开始面试，建议发送短信提醒',
  'success': '保存失败，请确认后重试',
  'info': '今天天气不错',
}
export default () => {
  const handleClick = (type:string) => {
    const msg = msgs[type]
    Toast[type](msg)
  }
  return types.map(type => <Button onClick={() => handleClick(type)} key={type}> {type}</Button>)
}