---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# Avatar 头像
## 代码演示

```tsx

/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Avatar, Demo} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Demo>
    <Avatar  src={imgurl} />
  </Demo>
)
```

```tsx

/**
 * title: 字母头像
 * desc: 基本使用
 */
import * as React from 'react';
import { Avatar, Demo} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Demo>
    <Avatar>H</Avatar>
    <Avatar sx={{ bgcolor: '#4caf50' }}>N</Avatar>
    <Avatar sx={{ bgcolor: '#ff6c6c' }}>N</Avatar>
  </Demo>
)
```

```tsx

/**
 * title: 尺寸
 * desc: 内置三种尺寸，size支持传入数字自定义尺寸
 */
import * as React from 'react';
import { Avatar, Demo} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Demo>
    <Avatar  src={imgurl} size={'small'} />
    <Avatar  src={imgurl} size={'middle'} />
    <Avatar  src={imgurl} size={'large'} />
    <Avatar  src={imgurl} size={100} />
  </Demo>
)
```

```tsx
/**
 * title: 性别
 * desc: 1男 2女
 */
import * as React from 'react';
import { Avatar, Demo} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Demo>
    <Avatar  src={imgurl} sex={'1'} />
    <Avatar  src={imgurl} sex={'2'} />
  </Demo>
)
```

```tsx
/**
 * title: disabled
 * desc: 头像禁用状态
 */
import * as React from 'react';
import { Avatar, Demo} from 'fbm-ui'

const imgurl = 'https://joeschmoe.io/api/v1/random'
export default () =>(
  <Demo>
    <Avatar  src={imgurl} size='large' disabled/>
  </Demo>
)
```


<API></API>