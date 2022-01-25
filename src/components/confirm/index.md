---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# confirm 二次确认方法
## 代码演示

```tsx
/**
 * title: 基本
 * desc: confirm 基础使用
 */
import * as React from 'react';
import { confirm, Layout, Button} from 'fbm-ui'


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

export default () =>(
  <Layout>
    <Button
      sx={{ mr: 1 }}
      onClick={() => {
      confirm({
        title: '确认？',
        content: '确认添加李小刚到此步骤',
        isShowClose: false,
      })
    }} >默认</Button>


    <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        header: null,
        content: '确认将李小刚从该职位移动到所选职位吗？该操作无法被撤销。',
        okText: '撤销',
        okProps: {
          color: 'error',
          variant: 'contained',
        },
      })
    }}  color="error"> 告警 </Button>


    <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        header: null,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  隐藏 header </Button>

    <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        header:CustomHeader,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  自定义 header </Button>


    <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        footer: null,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  隐藏 footer </Button>


    <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        footer: CustomFooter,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  自定义 footer </Button>


     <Button  sx={{ mr: 1 }} onClick={() => {
      confirm({
        width: 600,
        title: '设置大小',
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  > 设置弹框width </Button>
  </Layout>
)
```

<API></API>