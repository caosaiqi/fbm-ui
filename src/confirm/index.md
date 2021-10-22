---
nav:
  title: 组件
  path: /components
group:
  title: confirm 二次确认方法
---
# confirm 二次确认方法
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 给某个模块添加loaidng
 */
import * as React from 'react';
import { Aconfirm, Alayout, Button} from 'avocado-ui'


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
  <Alayout>
    <Button onClick={() => {
      Aconfirm({
        title: '确认？',
        content: '确认添加李小刚到此步骤',
      })
    }} >默认</Button>


    <Button onClick={() => {
      Aconfirm({
        title: '确认？',
        content: '确认将李小刚从该职位移动到所选职位吗？该操作无法被撤销。',
        okText: '撤销',
        okProps: {
          color: 'error',
          variant: 'contained',
        },
      })
    }}  color="error"> 告警 </Button>


    <Button onClick={() => {
      Aconfirm({
        header: null,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  隐藏 header </Button>

    <Button onClick={() => {
      Aconfirm({
        header:CustomHeader,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  自定义 header </Button>


    <Button onClick={() => {
      Aconfirm({
        footer: null,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  隐藏 footer </Button>


    <Button onClick={() => {
      Aconfirm({
        footer: CustomFooter,
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  >  自定义 footer </Button>


     <Button onClick={() => {
      Aconfirm({
        width: 600,
        title: '设置大小',
        content: '确认添加李小刚到此步骤？',
        okText: '添加',
      })
    }}  > 设置弹框width </Button>
  </Alayout>
)
```

<API></API>