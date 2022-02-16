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
  useForm
} from 'fbm-ui'

export default () => {
  const form = useForm({
    initialValues: {
      name:'',
      sex: 2,
      email: '',
      dates: [null, null]
    },
    onSubmit: (values) => {
      console.log(values)
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
          name='email' 
          label="邮箱"
          required
          rules={[
            { 
              type: 'email'
            }
          ]}
         />
         <FormItem 
          required
          name='sex' 
          label='性别'
         >  
          <Select options={[
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 2
            }
          ]}/>
         </FormItem>
         <FormItem 
          required
          name='dates' 
          label='开始时间-结束时间'
         >  
          <DateRangePicker />
         </FormItem>
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

```jsx
/**
 * title: 基本
 */
import * as React from 'react';
import { Layout, Input, Form, FormItem, Button, Select, rules, TextField } from 'fbm-ui'
import useFormItem from '../FormItem/useFormItem';
import useForm from './useForm';

const formProps= {
  initialValues: {
    name: '',
    sex: 1,
    mobile: '',
    email: '',
  },
  onSubmit: values => {
    console.log('onSubmit', values)
  },
}

export default () => {
  const form = useForm(formProps)

  const handleSubmit = () => {
    form.handleSubmit()
  }
  
  return (
    <Layout>
      <Form {...form}>
        <FormItem
          name="name"
          label="姓名"
          max={20}
          required
         />
        <FormItem name="sex">
          <Select options={[{ value: 1, label: '男' }, { value: 2, label: '女' }]} />
        </FormItem>
        <FormItem
          name="mobile"
          label="手机号"
          rules={[rules.required(), rules.mobile()]}
        />
        <FormItem
          name="email"
          label="邮箱"
          rules={[ {
            type: 'email',
          }]}
        />

      </Form>
      <Button onClick={handleSubmit}>
        提交
      </Button>
      <Button variant="outlined" onClick={form.handleReset}>
          重置
      </Button>
    </Layout>
  )

}
```


<API></API>