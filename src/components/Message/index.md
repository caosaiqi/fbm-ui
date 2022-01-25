---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Message 全局提示
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Message, Button, Demo } from 'fbm-ui'

const types = ['error', 'warning', 'success', 'info' ]

export default () => (
  <Demo>
    {
      types.map(type => (
        <Button 
          color={type}
          key={type}
          sx={{ mr: 2.5 }}
          onClick={() => Message[type](`这是一段${type}提示`)}
        > 
          {type}
        </Button>
      ))
    }
  </Demo>
)
```

<API></API>