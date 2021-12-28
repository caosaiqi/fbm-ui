---
nav:
  title: 组件
  path: /components
group:
  title: Autocomplete
---
# Autocomplete
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
      <Empty title=" dasd"/>
    </Layout>
  )
}
```

<API></API>
