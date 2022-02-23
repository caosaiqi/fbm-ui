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

// 测试性能
const KEYS =  {'a':'' ,'b':'', 'c': '', 'd':'', 'e':'', 'r':'', 't':'', 'y':'', 'u':'', 'i':'', 'p':'', 'x':'', 'v':'', 'n':'', 'm':'', 'z': ''}

export default () => {
  const form = useForm({
    initialValues: {
      name:'',
      sex: 2,
      email: '',
      date: null,
      password: '',
      rePassword: '',
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
          name="sex"
          label="性别"
          required
        >
          <Select options={[
            {
              label: '未知',
              value: '',
            },
            {
              label: '男',
              value: 1,
            },
            {
              label: '女',
              value: 2,
            }
          ]} />
        </FormItem>

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

         <FormItem
          name="password"
          type='password'
          label="密码"
          required
        />
        
        <FormItem
          name="rePassword"
          type='password'
          label="确认密码"
          required
          rules={[
            (value) => {
              if (value !== form?.values?.password) {
                return '两次密码不一致'
              }
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