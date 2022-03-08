---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# Select 下拉选择
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



