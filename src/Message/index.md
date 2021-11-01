---
nav:
  title: 组件
  path: /components
group:
  title: Toast 全局提示
---
# Toast 全局提示
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Alayout, Amessage, Button } from 'fbm-ui'


const types = ['error', 'warning', 'success', 'info' ]


export default () =>
types.map(type => (
  // eslint-disable-next-line react/jsx-key
  <Alayout>
    <Button color={type} key={type} onClick={() => Amessage[type](`这是一段${type}提示`)}> {type}</Button>
    </Alayout>
 ))
```

<API></API>