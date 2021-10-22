---
nav:
  title: 组件
  path: /components
group:
  title: Loading 加载
---
# Loading 加载
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Alayout, Aloading } from 'avocado-ui'


export default () => (
  <Alayout>
      <Aloading size="large"/> 
      <br /><br /><br />
      <Aloading size="small"/>
      <br /><br /><br />
      <Aloading size={100} />
  </Alayout>
)


```

<API></API>