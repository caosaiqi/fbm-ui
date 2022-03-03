---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

#  TimePicker 时间组件
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, TimePicker } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('22:22')

return (
    <Demo>
      <TimePicker value={value} disabled />
    </Demo>
  )
}
```