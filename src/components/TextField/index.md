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
import { Layout, TextField, rules, useTextField, Button} from 'fbm-ui'

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
    rules: [rules.required()]
  })

  const handleSubmit = () => {
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

<API></API>