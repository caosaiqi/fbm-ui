---
nav:
  title: 组件
  path: /components
group:
  title: Table 列表
---
# Table 列表
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Table, Layout, Message, TableColumnActions, TableColumnUserInfo, TableColumnCheckbox, Button, Paper } from 'fbm-ui'


export default () =>{
  const [actions, setActions] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [loading])

 const data = [
    {
      name: "张三",
      desc: `男 29岁 182381823`,
      avatar: "https://joeschmoe.io/api/v1/random",
      chips: [
        {
          label: "有纹身",
          color: "error"
        },
        {
          label: "大厂经历"
        }
      ],

      status: "待审核",
      date: "2021年11月08日"
    },
    {
      name: "李四",
      desc: `男 28岁 182381823`,
      avatar: "https://joeschmoe.io/api/v1/random",
      chips: [
        {
          label: "有纹身",
          color: "error"
        },
        {
          label: "大厂经历"
        }
      ],
      status: "慎审核中",
      date: "2021年11月08日"
    }
  ];

  const columns = [
    TableColumnCheckbox({
      selected: actions,
      checked: ({ row }) => actions.includes(row.id),
      allChecked: ({ data }) => {
        return  actions.length >= data.length
      } ,
      onAllChange: (checked) => {
        setActions(()=> {
          if (checked) return data.map(row => row.id)
          return []
        })
      },
      onChange:(checked, { row }) => {
        setActions(() => { 
          if (checked) return actions.concat(row.id)
          return actions.filter(id => id !== row.id)
        })
      }
    }),
    TableColumnUserInfo({
      label: '候选人资料',
    }),
    {
      id: 'name',
      label: '名称',
    },
    TableColumnActions({
      actions: [
        { 
          text: '认证流程',
          variant: 'outlined',
        },
        { 
          text: '新增用户',
          onClick: ({ row }) => Message.success('新增用户')
        },
      ]
    })
  ]

  const batchActions = [ 
    { 
      text: '认证流程',
      variant: 'outlined',
      color: 'error',
      actions: [
        { 
          text: '认证流程',
          variant: 'outlined',
          onClick: (data) => {
          }
        },
        { 
          text: '新增用户',
          onClick: () => Message.success('新增用户')
        },
      ],
    },
    { 
      text: '新增用户',
      color: 'error',
      onClick: () => Message.success('新增用户')
    }
  ]

  const pagination = {
    total: 20,
    onPageChange: async  (_, page) => {}
  }

  
  return (
    <Layout>
      <Table
        emptyText="暂无数据"
        nameText="候选人"
        loading={loading}
        data={data}
        columns={columns}
        batchActions={batchActions}
        pagination={pagination}
        tableContainerProps={{
          component: Paper
        }}
      />
    </Layout>
  )
}
```

<API></API>
