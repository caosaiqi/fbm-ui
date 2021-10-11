// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Button, confirm } from "../../../../src"

export default () => {
  const handleClick = (parmas = {}) => {
    confirm({
      title: '确认？',
      content: '该候选人长时间未开始面试，建议发送短信提醒',
      onOk:() => {
        alert('确定')
      },
      ...parmas,
    })
  }
  return (<div>
    <Button onClick={() => handleClick()}> 成 功</Button>
    <Button onClick={() => handleClick({
      type: 'error',
    })}> 删 除 </Button>
  </div>)
}