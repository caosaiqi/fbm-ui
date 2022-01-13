---
nav:
  title: 组件
  path: /components
group:
  title: Popconfirm 带确定按钮的弹框
---
# Popconfirm 带确定按钮的弹框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Popconfirm, Button, Layout} from 'fbm-ui'

export default () =>{
  const content = <div style={{height: 300, width: 400}}><h1>hell world</h1></div>
  const handleOk = ()=> new Promise((r) => setTimeout(r, 1500))
  return (
    <Layout>
      <Popconfirm message={'您确定要删除吗'} onOk={handleOk}>
        <Button >Popconfirm</Button>
      </Popconfirm>
    </Layout>
  )
}
```
