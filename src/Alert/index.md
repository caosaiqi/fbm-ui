---
nav:
  title: 组件
  path: /components
group:
  title: Alert 提醒
---
# Alert 提醒

## 代码演示

```tsx
import * as React from 'react';
import { Alert, Layout } from 'fbm-ui'

export default () => (
  <Layout>
    <Alert type='success'>  这是一个Success提醒 </Alert>
    <br />
    <Alert type='error'>  这是一个Error提醒 </Alert>
    <br />
    <Alert type='warning'>  这是一个Warning提醒 </Alert>
    <br />
    <Alert type='info'>  这是一个Info提醒 </Alert>
</Layout>
)
```
<API></API>