---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# TextField 带验证的输入框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  } from '@mui/material'
import { Layout, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    // label: '名称*',
    value,
    max: 5,
    onChange: handleChange,
    onClear: () => {
      setValue('')
    },
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
  }

  return (
    <Layout>
      <TextField
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Layout>
  )
}

```

```tsx
/**
 * title: standard
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    value,
    max: 5,
    onChange: handleChange,
    rules: [rules.required()],
    variant: 'standard',
    onClear: () => {
      setValue('')
    },
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
  }

  return (
    <Demo white={true}>
      <TextField
        size="small"
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Demo>
  )
}

```



```tsx
/**
 * title: textarea
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    value,
    rules: [rules.required()],
    onChange: handleChange,
    sx: {
      height: 'auto',
    },
    InputProps: {
      rows:3 ,
      placeholder: '内容',
      multiline: true,
      inputProps: {
        maxLength: 3,
      }
    }
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
  }

  return (
    <Demo white={true}>
      <TextField
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Demo>
  )
}

```


```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Autocomplete } from '@mui/material'
import { Layout, rules, Button, SearchIcon,TextField } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

  return (
    <Layout>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => {
          console.log(params.inputProps)
          return <input {...params.inputProps} />
        }}
      />
    </Layout>
  )
}

```

