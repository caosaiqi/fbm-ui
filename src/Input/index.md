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
 * desc: 输入框定义了三种尺寸（默认、小），高度分别为44px和34px。
 */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {  Alayout, Ainput } from 'fbm-ui'

export default () => (
  <Alayout>
    <Ainput label="名称"  />
    <br />
    <Ainput label="名称"  size="small" />
  </Alayout>
)

```

<API></API>