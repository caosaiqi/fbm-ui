---
nav:
  title: 组件
  path: /components
group:
  title: Actions 多类型按钮操作
---
# Actions 多类型按钮操作

## 代码演示

```tsx
import * as React from 'react';
import { Layout, Actions, AddIcon, DocExcelIcon, DocPdfIcon} from 'fbm-ui'

const actions = [
  {
    text: '创建',
    variant: 'outlined',
  },
  {
    text: '更新',
  },
  {
    text: '删除',
    color: 'error',
  },
  {
    text: '添加',
    icon: <AddIcon />,
    actions: [
      { 
        text: 'Excel导入',
        icon: <DocExcelIcon />,
        // onClick: () => Message.success('编辑用户')
      },
      { 
        text: '手动添加',
        actions: [
          {
            text: '手动添加A',
            icon: <DocPdfIcon />,
            // onClick: () => Message.success('删除用户')
          },
            {
            text: '手动添加B',
            icon: <DocPdfIcon />,
            // onClick: () => Message.success('删除用户')
          }
        ]
      }
    ]
  }
]

export default () => (
  <Layout>
    <Actions
      actions={actions}
    />
  </Layout>
)
```
<API></API>