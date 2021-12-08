---
nav:
  title: 组件
  path: /components
group:
  title: Form 表单
---
# Form 表单
## 代码演示

```jsx
/**
 * title: 基本
 */
import * as React from 'react';
import {  Layout, Input, Form, Button, Select} from 'fbm-ui'
import { useFormik } from 'formik';

const formProps= {
  initialValues: {
    name: '123',
  },
  validate: (values, props) => {
    // const errors = {};
    // const helperTexts = {
    //   name: '请输入名称',
    // }
    // for (const key in values) {
      
    //   if (values[key]) {
    //     delete values[key]
    //   }
    // }
    // return helperTexts
  }, 
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
}

  
  const ageOptions = [
    {
      label: '20岁',
      value: 20
    },
    {
      label: '男',
      value: '男'
    }
  ]

export default () => {
  const formik = useFormik(formProps)
  const handleClick = async () => {
    const error = formik.validateForm()
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