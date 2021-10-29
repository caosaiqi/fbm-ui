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
import {  Alayout, Aloading, Abox} from 'fbm-ui'

export default () => (
  <Alayout>
      <Abox sx={{ height: 100 }}>
          <Aloading size={40}/> 
      </Abox>
      <Abox><Aloading size={20}/> </Abox>
  </Alayout>
)


```

<API></API>