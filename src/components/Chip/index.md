---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# Chip 标签
## 代码演示

 ```tsx
/**
 * title: 基本
 */
import * as React from 'react';
import {  Layout, Chip } from 'fbm-ui'


export default () => {
  const colors = ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']

  return (
    <Layout>
        {
          colors.map((color) => <Chip color={color} label={color} sx={{ mr: 3 }}/>)
        }
    </Layout>
  )
}
```

<API></API>