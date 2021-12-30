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
import {  Layout, Input, Form, FormItem, Button, Select } from 'fbm-ui'

import {useFormik} from 'formik'

const formProps= {
  initialValues: {
    name:'',
    sex: 1,
  },
  validate: (values, props) => {
    const errors = {}
    if (!values.name)  {
      errors['name'] = '请输入名称'
    }
    if (!values.sex) {
      errors['sex'] = '请选择年龄'
    }
    return errors
  }, 
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
}

const sexs = [
  {
    label: '男',
    value: 1
  },
  {
    label: '女',
    value: 2
  }
]

export default () => {
  const formikValues =  useFormik(formProps)
  const handleSubmit = () => formikValues.handleSubmit()

  return (
    <Layout>
      <Form {...formikValues}>
        <FormItem 
          name='name' 
          label="名称"
          extra="这是一段辅助文案" 
          />
        <FormItem name='sex' label="性别">
          <Select options={sexs} />
        </FormItem>
      </Form>
      <Button onClick={handleSubmit}>
        提交
      </Button>
    </Layout>
  )

}
```

<API></API>