---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# DateRangePicker 日期范围选择器
## 代码演示

```tsx
/**
 * title: StaticDateRangePicker
 * desc: 
 */
import * as React from 'react';
import {  Demo, Input, Box, DateRangePicker } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState([null, null])

  const handleChange = (value) => {
    setValue(value)
  }

  return  (
    <Demo grey={true}>
      <DateRangePicker value={value} onChange={handleChange} />
    </Demo>
  )
}
```
