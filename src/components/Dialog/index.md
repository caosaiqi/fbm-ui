---
nav:
  title: 组件
  path: /components
group:
  title: Dialog 对话框
---
# Dialog 对话框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Dialog, Layout, Button, Form, Input} from 'fbm-ui'
import { useFormik } from 'formik'

const CustomHeader =  ({ onClose }) => (
  <div style={{
    display:'flex',
    alignItems: 'center',
  }}>
    <p style={{ flex:1}}>CustomHeader</p>
    <Button onClick={onClose}> 关闭</Button>
  </div>
 )

const CustomFooter = ({onOK, onClose}) =>(
 <div style={{
    display:'flex',
    alignItems: 'center',
  }}>
      <p style={{ flex:1}}>CustomFooter</p>
    <Button onClick={onClose}> 关闭</Button>
  </div>
 )


export default () =>{
  const [open, setOpen] = React.useState(false)
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  const handleOk = async () => {
     new Promise((r) => {
      setTimeout(() => {
        r(false)
      }, 1000)
    })
  }

  const formProps = {
    initialValues: {
      name: '',
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
    }
  }

   const formik = useFormik(formProps)

  return (
    <Layout>
        <Button onClick={() => setOpen(true)}> Show </Button>
        <Dialog 
          open={open}
          onClose={() => setOpen(false)}
          onOk={handleOk}
        >
          <Form {...formik}>
            <Input fullWidth name="name" />
          </Form>
        </Dialog>


         <Button onClick={() => setOpen1(true)}> 自定义Header </Button>
          <Dialog 
            open={open1}
            header={CustomHeader}
            onClose={() => setOpen1(false)}
            onOk={() => setOpen1(false)}
          >
            <h1>content</h1 >
          </Dialog>

          <Button onClick={() => setOpen2(true)}> 自定义 Footer </Button>
          <Dialog 
            open={open2}
            footer={CustomFooter}
            onClose={() => setOpen2(false)}
            onOk={() => setOpen2(false)}
          >
            <h1>content</h1 >
          </Dialog>
    </Layout>
  )
}
```

<API></API>