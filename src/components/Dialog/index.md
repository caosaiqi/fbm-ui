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
  return (
    <Layout>
        <Button onClick={() => setOpen(true)}> Show </Button>
        
          <Dialog 
            open={open}
            title="12312321"
            onClose={() => setOpen(false)}
            onOk={() => setOpen(false)}
          >
            <h1>content</h1 >
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