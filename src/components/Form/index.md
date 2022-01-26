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
  validateOnChange: false,
  initialValues: {
    name:'',
    sex: 2,
  },
  onSubmit: values => {
    console.log('onSubmit', values)
  },
}

export default () => {
  const formikValues = useFormik(formProps)
  const handleSubmit = () => {
    formikValues.handleSubmit()
  }

  return (
    <Layout>
      <Form {...formikValues}>
        <FormItem
          required
          name='name' 
          label="名称"
          extra='这是一段辅助文字'
          max={20}
          rules={[
            { type: 'email', message: '请输入正确的邮箱' }
          ]}
         />
         <FormItem 
          required
          name='sex' 
          label='性别'
         >
         </FormItem>
      </Form>
      <Button variant="outlined" onClick={formikValues.handleReset} sx={{ mr:1 }}>
          重置
      </Button>
      <Button onClick={handleSubmit}>
        提交
      </Button>
    </Layout>
  )

}
```

<API></API>