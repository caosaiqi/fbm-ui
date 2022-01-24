---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Popover 基础弹框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Popover, Button, Layout} from 'fbm-ui'

export default () =>{
  const [open, setOpen] = React.useState(true)
  const content = <div style={{height: 100, width: 150}}><h1>hell world</h1></div>
  return (
    <Layout>
      <Popover content={content} trigger="click">
        <Button>弹框</Button>
      </Popover>
    </Layout>
  )
}
```
