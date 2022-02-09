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
 * title: DateRangePicker
 * desc: 基本用法
 */
import * as React from 'react';
import {  Demo, Input, Box, DateRangePicker } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState([null, null])
  const handleChange = (value) => {
    setValue(value)
  }

  return  (
    <Demo>
      <DateRangePicker 
        value={value} 
        onChange={handleChange} 
        placeholder='开始时间-结束时间'
      />
    </Demo>
  )
}
```


```tsx
/**
 * title: disabled 
 * desc: 禁用输入框
 */
import * as React from 'react';
import {  Demo, Input, Box, DateRangePicker } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState([null, null])
  const handleChange = (value) => {
    setValue(value)
  }
  
  return  (
    <Demo>
      <DateRangePicker 
        disabled={true}
        value={value} 
        onChange={handleChange} 
        placeholder='开始时间-结束时间'
      />
    </Demo>
  )
}
```

```tsx
/**
 * title: maxDate 
 * desc: 禁用日期
 */
import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import {  Demo, Input, Box, DateRangePicker } from 'fbm-ui'

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}
export default () => {
  const [value, setValue] = React.useState([null, null])
  const handleChange = (value) => {
    setValue(value)
  }
  
  return  (
    <Demo>
      <DateRangePicker 
        value={value} 
        onChange={handleChange} 
        placeholder='开始时间-结束时间'
        maxDate={getWeeksAfter(value[0], 4)}
      />
    </Demo>
  )
}

```