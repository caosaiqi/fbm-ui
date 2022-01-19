---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Popover 弹框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Popover, Button, Layout} from 'fbm-ui'

export default () =>{
  const content = <div style={{height: 300, width: 400}}><h1>hell world</h1></div>
  return (
    <Layout>
      <Popover content={content} trigger="hover">
        <Button >弹框</Button>
      </Popover>
    </Layout>
  )
}
```

<API></API>
