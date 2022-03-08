---
nav:
  title: 组件
  path: /components
group:
  title: 导航
---
# Header 标题+操作
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Layout, Header, Message, AddIcon,  DocExcelIcon, DocPdfIcon, EditIcon } from 'fbm-ui'

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
      icon: <EditIcon />,
      actions: [
        { 
          text: 'Excel导入',
          icon: <DocExcelIcon />,
          onClick: () => Message.success('编辑用户')
        },
        { 
          text: '手动添加',
          icon: <DocExcelIcon />,
          actions: [
            {
              text: '手动添加A',
              icon: <DocPdfIcon />,
              onClick: () => Message.success('删除用户')
            },
             {
              text: '手动添加B',
              icon: <DocPdfIcon />,
              onClick: () => Message.success('删除用户')
            }
          ]
        }
      ]
    }
 ]

  const renderAction = () => {
    return <div>Ceshi</div>
  }

 return (
    <Layout>
      <Header
        title="用户中心" 
        actions={actions}
        // renderAction={renderAction}
      />
    </Layout>
 )
}
```

<API></API>