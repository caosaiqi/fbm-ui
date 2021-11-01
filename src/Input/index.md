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
import {  Alayout, Ainput, Abox} from 'fbm-ui'

export default () => (
  <Alayout>
    <Abox>
      <Abox>
        <Ainput placeholder="请输入姓名" label="名称"  />
      </Abox>
    </Abox>

      <Abox>
        <Ainput placeholder="请输入姓名" label="名称" size="small"  />
      </Abox>
  </Alayout>
)
```


```tsx
/**
 * title: disabled
 * desc: 禁用状态
 */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {  Alayout, Ainput } from 'fbm-ui'

export default () => (
  <Alayout>
    <Ainput disabled label="名称"  />
  </Alayout>
)

```

<API></API>