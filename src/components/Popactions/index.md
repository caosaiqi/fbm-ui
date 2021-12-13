---
nav:
  title: 组件
  path: /components
group:
  title: Popactions 
---
# Popactions
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, Popactions, Button, } from 'fbm-ui'

export default () =>{
  const actions = [
    { 
      text: '认证流程',
      variant: 'outlined',
    },
    { 
      text: '新增用户',
    },
 ]

  return (
    <Layout>
      <Popactions actions={actions}>
        <Button>Popactions</Button>
      </Popactions>
    </Layout>
  )
}
```
