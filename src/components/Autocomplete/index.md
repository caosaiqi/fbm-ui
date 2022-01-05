<!-- ---
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
        
import { Select, Layout } from 'fbm-ui'
import { Autocomplete } from '@mui/material'

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
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        // getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} label="limitTags" placeholder="Favorites" />
        )}
      />
    </Layout>
  )
}
```

<API></API> -->
