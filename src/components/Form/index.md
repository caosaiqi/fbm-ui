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
import {  Layout, Input, Form, FormItem, Button, Select} from 'fbm-ui'
import { useFormik } from 'formik';

const { useForm } = Form

const formProps= {
  initialValues: {
    name: 'asdasd',
  },
  validate: (values, props) => {
    const errors = {
      name: '请输入名称'
    }
    if (!values.name) {
      return errors
    }
    return {}
  }, 
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
}

const sexs = [
  {
    label: '男',
    value: '1'
  },
  {
    label: '女',
    value: '2'
  }
]

export default () => {
  const formik = useFormik(formProps)


  return (
    <Layout>
      <Form formik={formik}>
        <FormItem
          name='name'
          label="名称"
          />
      </Form>
    </Layout>
  )

}
```

<API></API>