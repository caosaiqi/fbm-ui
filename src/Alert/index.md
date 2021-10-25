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
import { Aalert, Alayout} from 'avocado-ui'

export default () => (
  <Alayout>
    <Aalert type='success'>  这是一个Success提醒 </Aalert>
    <br />
    <Aalert type='error'>  这是一个Error提醒 </Aalert>
    <br />
    <Aalert type='warning'>  这是一个Warning提醒 </Aalert>
    <br />
    <Aalert type='info'>  这是一个Info提醒 </Aalert>
</Alayout>
)
```
<API></API>