---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Drawer 抽屉
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Drawer, Layout, Button, Typography } from 'fbm-ui'

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
    setOpen(false)
  }
  return (
    <Layout>
      <Button onClick={() => setOpen(true)}>open</Button>
      
      <Drawer open={open} onOk={handleOk} onClose={handleClose}>
        <Typography variant="h4"> 招聘管理 面面俱到</Typography>
        <Typography variant="body1">
          从简历筛选到offer管理的招聘流程线上自动化，各模块100%可
          配置，帮助HR提升招聘效率
        </Typography>
      </Drawer>
    </Layout>
  )
}

```

<API></API>