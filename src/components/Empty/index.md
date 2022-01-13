---
nav:
  title: 组件
  path: /components
group:
  title: Empty 数据为空状态
---
# Empty 数据为空状态
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
        
import { Layout, Empty} from 'fbm-ui'

export default () =>{

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ]
  return (
    <Layout>
      <Empty desc="暂无用户信息"/>
    </Layout>
  )
}
```

<API></API>
