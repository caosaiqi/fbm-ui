---
nav:
  title: 组件
  path: /components
group:
  title: FormItem
---
# FormItem
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, FormItem , Button, Input, rules } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('123')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Layout>
      <FormItem
        label='名称'
        max={5}
        value={value}
        onChange={handleChange}
      />
    </Layout>
  )
}

```

<API></API>