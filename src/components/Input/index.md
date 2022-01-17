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
import {  Demo, Input, Box } from 'fbm-ui'

export default () => (
  <Demo grey={true}>
    <Box style={{backgroundColor: '#FAFAFA', padding: 20}}>
    <Input placeholder="请输入姓名" clear={true} />
    </Box>
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
    <Box style={{backgroundColor: '#FAFAFA', padding: 20}}>
     <Input disabled placeholder="请输入姓名" />
    </Box>
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
  <Demo>
    <Box style={{backgroundColor: '#FAFAFA', padding: 20}}>
     <Input variant='standard'  placeholder="请输入姓名" />
    </Box>
  </Demo>
)
```



<API></API>