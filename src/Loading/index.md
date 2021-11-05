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
import {  Layout, Loading, Box } from 'fbm-ui'

export default () => (
  <Layout>
      <Box sx={{ height: 100 }}>
          <Loading size={40}/> 
      </Box>
      <Box><Loading size={20}/> </Box>
  </Layout>
)


```

<API></API>