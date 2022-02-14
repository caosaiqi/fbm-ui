---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# Input 输入框
## 代码演示

```tsx
/**
 * title: 两种大小
 * desc: 输入框定义了两种尺寸（默认、小），高度分别为44px和34px。
 */
import * as React from 'react';
import {  Demo, Input, Box } from 'fbm-ui'

export default () => (
  <Demo grey={true}>
    <Input placeholder="请输入姓名"  />
  </Demo>
)
```

```tsx
/**
 * desc: disabled
 */
import * as React from 'react';
import {  Demo, Input, Box } from 'fbm-ui'

export default () => (
  <Demo>
    <Input disabled placeholder="请输入姓名" />
  </Demo>
)
```

```tsx
/**
 * desc: startAdornment
 */
import * as React from 'react';
import {  Demo, Input, Box, SearchIcon} from 'fbm-ui'

export default () => (
  <Demo>
    <Input 
     
      startAdornment={
        <SearchIcon color="disabled" />
      }
      placeholder="请输入姓名"
     />
  </Demo>
)
```


```tsx
/**
 * desc: StandardInput
 */
import * as React from 'react';
import {  Demo, Input, Box } from 'fbm-ui'

export default () => (
  <Demo white>
    <Input variant='standard'  placeholder="请输入姓名" />
  </Demo>
)
```



<API></API>