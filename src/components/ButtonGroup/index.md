---
nav:
  title: 组件
  path: /components
group:
  order: 1
  title: 通用
---
# ButtonGroup 按钮组
## 代码演示



```tsx
/**
 * title: 基本
 */
import * as React from 'react';
import {  Layout, Button, Box , ButtonGroup, ArrowDropDownIcon } from 'fbm-ui'

export default () => (
  <Layout>
      <ButtonGroup  variant="contained" >
        <Button>分体式按钮</Button> 
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
  </Layout>
)
```
```tsx
/**
 * title: disabled
 */
import * as React from 'react';
import {  Layout, Button, Box , ButtonGroup, ArrowDropDownIcon } from 'fbm-ui'

export default () => (
  <Layout>
      <ButtonGroup disabled variant="contained">
        <Button>分体式按钮</Button> 
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
  </Layout>
)
```

<API></API>