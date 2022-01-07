---
nav:
  title: 组件
  path: /components
group:
  title: TextField
---
# TextField
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, TextField, rules } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('123')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  

  return (
    <Layout>
      <TextField
        extra='这是一段辅助文字'
        label='名称'
        max={5}
        value={value}
        onChange={handleChange}
        onError={(error) => console.log(error)}
        onClear={() => setValue('')}
      />
    </Layout>
  )
}

```

<API></API>