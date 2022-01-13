---
nav:
  title: 组件
  path: /components
group:
  title: TextField 带验证的输入框
---
# TextField 带验证的输入框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, TextField, rules, useTextField, Button} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
    
  }

  const nameFieldProps = useTextField({
    label: '名称',
    value,
    max: 5,
    onChange: handleChange,
    rules: [rules.required()],
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
    // nameFieldProps.setError('123123')
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

<API></API>