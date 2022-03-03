---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Autocomplete 带验证的输入框
## 代码演示


```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Autocomplete } from '@mui/material'
import { Layout, rules, Button, SearchIcon, TextField, useInput} from 'fbm-ui'

export default () => {

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

  // const { 
  //   error,
  //   value,
  //   setValue,
  // } = useInput({
  //   value,
  //   rules: [{ required: true }]
  // })

  const handleSubmit = () => {
  }

  return (
    <Layout>
      <Autocomplete
        multiple={true}
        options={top100Films}
        onChange={(_, newValue) => {
        }}

        renderInput={(params) => {
          return (
            <TextField 
              {...params}
            />
          )
        }}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Layout>
  )
}

```