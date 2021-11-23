---
nav:
  title: 组件
  path: /components
group:
  title: Drawer 抽屉
---
# Drawer 抽屉
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Drawer, Layout, Button} from 'fbm-ui'

export default () => {
  const [ open, setOpen ] = React.useState(false)
   const handleOk = (props) => {
    return new Promise((r) => {
      setTimeout(() => {
        r(true)
        props.onClose()
      }, 1000)
    })
  }
  const handleClose = () => {
    console.log('---------')
    setOpen(false)
  }
  return (
    <Layout>
      <Button onClick={() => setOpen(true)}>ASDAS</Button>
      <Drawer open={open} onOk={handleOk} onClose={handleClose}>
        <h1  style={{ width: 960 }}>asdasdada</h1>
      </Drawer>
    </Layout>
  )
}

```

<API></API>