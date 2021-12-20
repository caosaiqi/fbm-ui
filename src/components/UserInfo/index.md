---
nav:
  title: 组件
  path: /components
group:
  title: UserInfo 用户详情
---
# UserInfo 用户详情
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, UserInfo, FbmUserInfoProps } from 'fbm-ui'

export default () =>{
  const chips = [
    {
      label: '有纹身',
      color: 'error'
    },
    {
      label: '大厂经历',
      onClick: (error) => console.log(error),
    }
  ]
  return (
    <Layout>
     <UserInfo 
        avatar={'https://alicdn.fbmms.cn/avatar/IOFPNuz7Rg2lPqpMoa6gkwDwLLcRQ5XzQ1pp1638758794521612563.jpeg'}
        sex={1}
        name={'马云'}
        desc={'19岁 初中 18841889422'}
        chips={chips}
      />
    </Layout>
  )
}
```

<API></API>
