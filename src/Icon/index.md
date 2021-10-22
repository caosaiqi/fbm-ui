---
nav:
  title: 组件
  path: /components
group:
  title: Icon 图标
---
# Icon 图标
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Alayout, Aicon } from 'avocado-ui'

const icons = ['CheckIcon', 'WarningIcon', 'ErrorIcon', 'InfoIcon']

export default () => icons.map(name => <Aicon name={name} key={name}/>)


```

<API></API>