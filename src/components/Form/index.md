---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# Form 表单
## 代码演示

```jsx
/**
 * title: 基本
 */
import * as React from 'react';
import { 
  Layout,
  Input,
  Form, 
  FormItem,
  Button,
  Select, 
  rules,
} from 'fbm-ui'

import { useFormik } from 'formik'

const formProps= {
  initialValues: {
    name:'123123',
    sex: 1,
  },
  onSubmit: values => {
    console.log('onSubmit', values)
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
  const formikValues = useFormik(formProps)

  const handleSubmit = () => {
    formikValues.handleSubmit()
  }

  return (
    <Layout>
      <Form {...formikValues}>
        <FormItem 
          clear={true}
          name='name' 
          label="名称"
          extra='这是一段辅助文字'
          max={20}
          rules={[
            { 
              required: true,
              message: '请输入密码'
            },
            { 
              required: true,
              message: '请输入密码'
            }
          ]}
         />
      </Form>
      <Button onClick={handleSubmit}>
        提交
      </Button>
      <Button variant="outlined" onClick={formikValues.handleReset}>
          重置
      </Button>
    </Layout>
  )

}
```

<API></API>