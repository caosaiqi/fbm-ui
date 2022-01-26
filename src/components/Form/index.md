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
  useForm
} from 'fbm-ui'

export default () => {
  const form = useForm({
    initialValues: {
      name:'',
      sex: 2,
    }
  })

  return (
    <Layout>
      <Form {...form}>
        <FormItem
          required
          name='name' 
          label="名称"
          max={20}
         />
         <FormItem 
          required
          name='sex' 
          label='性别'
         >
         </FormItem>
      </Form>
      <Button variant="outlined" sx={{ mr:1 }}>
          重置
      </Button>
      <Button onClick={form.handleSubmit}>
        提交
      </Button>
    </Layout>
  )

}
```

<API></API>