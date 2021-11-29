---
nav:
  title: 组件
  path: /components
group:
  title: Form 表单
---
# Form 表单
## 代码演示

```tsx
/**
 * title: 基本
 */
import * as React from 'react';
import {  Layout, Input, Form, Button } from 'fbm-ui'
import { useFormik } from 'formik';

const formProps = {
  initialValues: {
    name: 'asdasd',
    password: '',
  },
  validate: (values, props) => {
    const errors = {};
    const helperTexts = {
      name: '请输入名称',
      password: '请输入密码',
    }
    Object.keys(helperTexts).forEach(k => {
      if (values[k] === '') {
        errors[k] = helperTexts[k]
      }
    })
    return errors
  }, 
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
}

export default () => {
  const formik = useFormik(formProps)
  const handleClick = async () => {
    console.log(formik)
    await formik.executeSubmit()
  }
  return (
  <Layout>
    <Form formik={formik}>
      <Input label="名称" name="name" sx={{mr: 2}} />
    </Form>
    <Button sx={{m: '3px 0px 0 5px'}} variant="contained" onClick={handleClick}>
      提交
    </Button>
  </Layout>
)

}
```

<API></API>