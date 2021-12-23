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
import { Layout, FormItem , Button, Input} from 'fbm-ui'

export default () => {
 
  return (
    <Layout>
      <FormItem
        name='name'
        label="名称"
      >
        <Input placeholder="请输入名称" />
      </FormItem>
    </Layout>
  )
}

```

<API></API>