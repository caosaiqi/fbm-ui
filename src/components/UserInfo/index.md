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

const User: React.FC<FbmUserInfoProps> = () => {
  return (
    <UserInfo 
        avatar={'https://alicdn.fbmms.cn/avatar/IOFPNuz7Rg2lPqpMoa6gkwDwLLcRQ5XzQ1pp1638758794521612563.jpeg'}
        sex={1}
        name={'小明'}
        desc={'19岁 初中 18841889422'}
      />
  )
}

export default () =>{
  return (
    <Layout>
        <User />
    </Layout>
  )
}
```

<API></API>
