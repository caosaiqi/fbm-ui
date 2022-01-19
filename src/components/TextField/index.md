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
import { Layout, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    label: '名称*',
    value,
    max: 5,
    onChange: handleChange,
    rules: [rules.required()],
    onClear: () => {
      setValue('')
    },
    inputProps: {
      onBlur: () => {
        console.log('--')
      },
    }
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
    inputProps: {
      rows: 10,
      placeholder: '内容',
      multiline: true,
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

