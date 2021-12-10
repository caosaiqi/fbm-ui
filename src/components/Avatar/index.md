---
nav:
  title: 组件
  path: /components
group:
  title: Avatar 头像
---
# Avatar 头像
## 代码演示

```tsx

/**
 * title: 基本
 * desc: 内置三种尺寸，size支持传入数字自定义尺寸
 */
import * as React from 'react';
import { Avatar, Layout} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Layout>
    <Avatar  src={imgurl} size='small' />
    <br/>
    <Avatar  sex="1" src={imgurl} size='middle' />
    <br/>
     <Avatar  sex="0" src={imgurl} size='middle' />
    <Avatar  src={imgurl} size='large' />
     <br/>
    <Avatar  src={imgurl} size={300} />
    
  </Layout>
)
```

```tsx
/**
 * title: disabled
 * desc: 头像禁用状态
 */
import * as React from 'react';
import { Avatar, Layout} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Layout>
    <Avatar  src={imgurl} size='large' disabled/>
    
  </Layout>
)
```


<API></API>