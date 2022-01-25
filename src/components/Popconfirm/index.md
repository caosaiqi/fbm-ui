---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Popconfirm 带确定按钮的弹框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {Popconfirm, Button, Demo} from 'fbm-ui'

export default () =>{
  const content = <div style={{height: 300, width: 400}}><h1>hell world</h1></div>
  const handleOk = ()=> new Promise((r) => setTimeout(r, 1500))

  return (
    <Demo>
      <Popconfirm 
        content={'您确定要删除吗'} 
        onOk={handleOk}
      >
        <Button >Popconfirm</Button>
      </Popconfirm>
    </Demo>
  )
}
```


```tsx
/**
 * title: TextField
 * desc: 配合Form使用
 */
import * as React from 'react';
import {Popconfirm, Demo, TextField, useTextField, rules, Button} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState()

  const nameTextField = useTextField({
    value,
    label: '名称',
    rules: [rules.required()],
    onChange: (e) => {
      setValue(e.target.value)
    },
    sx: {
      height: 'auto'
    }
  })

  const handleOk = async ({ onClose }) => {
    //验证
    const isError = await nameTextField.handleValidate()
    if (isError) return

    // fetch
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    // 关闭弹框
    onClose()
  }

  return (
    <Demo>
      <Popconfirm
        isAway={false}
        title="修改名称"
        content={<TextField {...nameTextField} />}
        onOk={handleOk}
      >
        <Button >Popconfirm</Button>
      </Popconfirm>
    </Demo>
  )
}
```