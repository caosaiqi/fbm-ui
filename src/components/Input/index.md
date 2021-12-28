---
nav:
  title: 组件
  path: /components
group:
  title: Input 输入框
---
# Input 输入框
## 代码演示

```tsx
/**
 * title: 两种大小
 * desc: 输入框定义了两种尺寸（默认、小），高度分别为44px和34px。
 */
import * as React from 'react';
import {  Layout, Input, Box } from 'fbm-ui'

export default () => (
  <Layout>
    <Input placeholder="请输入姓名" />
    <Input disabled placeholder="请输入姓名" />

  </Layout>
)
```


<API></API>