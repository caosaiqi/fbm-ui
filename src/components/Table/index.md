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
import { Table, Layout, Message, TableColumnActions, TableColumnUserInfo, TableColumnCheckbox, Button} from 'fbm-ui'


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
      id: '1',
      sex: 1,
      avatar: 'https://alicdn.fbmms.cn/avatar/IOFPNuz7Rg2lPqpMoa6gkwDwLLcRQ5XzQ1pp1638758794521612563.jpeg',
      name: '小明',
      age: '18'
    },
    {
      id: '2',
      sex: 2,
      avatar: 'https://alicdn.fbmms.cn/avatar/IOFPNuz7Rg2lPqpMoa6gkwDwLLcRQ5XzQ1pp1638758794521612563.jpeg',
      name: '小红',
      age: '18'
    },
    {
      id: '3',
      sex: '未知',
      avatar: 'https://alicdn.fbmms.cn/avatar/IOFPNuz7Rg2lPqpMoa6gkwDwLLcRQ5XzQ1pp1638758794521612563.jpeg',
      name: '小明',
      age: '18'
    }
  ]

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
      formatProps: ({ row }) => {
        
        return {
          sex: row.sex,
          avatar: row.avatar,
          name: row.name,
          desc: `男 19岁 182381823`,
          chips: [
            {
              label: '大厂经历'
            },
            {
              label: '有纹身',
              color: 'error'
            },
          ]
        }
      }
    }),
    {
      id: 'name',
      label: '名称',
    },
    {
      id: 'age',
      label: '性别',
      width: 350
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
        nameText="候选人"
        loading={loading}
        data={data}
        columns={columns}
        batchActions={batchActions}
        pagination={pagination}
      />
    </Layout>
  )
}
```

<API></API>
