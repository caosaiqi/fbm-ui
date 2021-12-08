---
nav:
  title: 组件
  path: /components
group:
  title: PageHeader 标题+操作
---
# PageHeader 标题+操作
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Layout, PageHeader, Message, AddIcon} from 'fbm-ui'

export default () =>{

 const actions = [
    { 
      text: '认证流程',
      variant: 'outlined',
      onClick: () => Message.success('新增用户')
    },
    { 
      text: '新增用户',
      icon: <AddIcon />,
      onClick: () => Message.success('新增用户')
    },
    { 
      text: '操作',
      actions: [
        { 
          text: '编辑',
           onClick: () => Message.success('编辑用户')
        },
        { 
          text: '删除',
          onClick: () => Message.success('删除用户')
        }
      ]
    }
 ]

 return (
    <Layout>
      <PageHeader 
        title="用户中心" 
        actions={actions}
      />
    </Layout>
 )
}
```
