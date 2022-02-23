---
nav:
  title: 组件
  path: /components
group:
  title: 录入数据
---
# DatePicker
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, Typography, DatePicker } from 'fbm-ui'

export default () => {
  
  const handleChange = (newValue) => {
    console.log(newValue)
  }

  return (
    <Demo>
      <DatePicker onChange={handleChange} />
    </Demo>
  )
}

```