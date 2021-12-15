---
nav:
  title: 组件
  path: /components
group:
  title: select 下拉选择
---
# select 下拉选择
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
        
import { Select, Layout } from 'fbm-ui'
import { MenuItem, FormControl, InputLabel} from '@mui/material'

export default () =>{
  const content = <div style={{height: 300, width: 400}}><h1>hell world</h1></div>
  const [age, setAge] = React.useState(20)
  
  const options = [
    {
      label: '20岁',
      value: 20
    },
    {
      label: '男',
      value: '男'
    }
  ]

  const handleChange = (e) => {
    setAge(e.target.value)
  }
  return (
    <Layout>
      <Select
        label="年龄"
        name="age"
        value={age}
        options={options}
        onChange={handleChange}
      >
      </Select>
    </Layout>
  )
}
```

<API></API>
