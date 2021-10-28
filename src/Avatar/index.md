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
import { Aavatar, Alayout} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Alayout>
    <Aavatar  src={imgurl} size='small' />
    <br/>
    <Aavatar  src={imgurl} size='middle' />
    <br/>
    <Aavatar  src={imgurl} size='large' />
     <br/>
    <Aavatar  src={imgurl} size={300} />
    
  </Alayout>
)
```

```tsx
/**
 * title: disabled
 * desc: 头像禁用状态
 */
import * as React from 'react';
import { Aavatar, Alayout} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Alayout>
    <Aavatar  src={imgurl} size='large' disabled/>
    
  </Alayout>
)
```


<API></API>