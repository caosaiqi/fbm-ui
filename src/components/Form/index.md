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
  DateRangePicker,
  Select, 
  rules,
  useForm,
  DatePicker
} from 'fbm-ui'

export default () => {
  const form = useForm({
    initialValues: {
      name:'',
      sex: 2,
      email: '',
      date: null
    },
    onSubmit: (values) => {
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
          name="date"
          label="日期"
          required
          rules={[
            {
              type: 'date'
            }
          ]}
        >
          <DatePicker />
        </FormItem>

        <FormItem
          name="email"
          label="邮箱"
          required
          rules={[
            {
              type: 'email'
            }
          ]}
        />

      </Form>
      <Button onClick={form.handleReset} variant="outlined" sx={{ mr:1 }}>
          重置
      </Button>
      <Button onClick={form.handleSubmit}>
        提交
      </Button>
    </Layout>
  )

}
```