---
nav:
  title: 组件
  path: /components
group:
  title: Toast 全局提示
---
# Toast 全局提示
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Alayout, Atoast, Button} from 'fbm-ui'


const types = ['error', 'warning', 'success', 'info' ]

const closeCallback = () => console.log('提示关闭回调')
const handleClick = (type) => {

  Atoast[type](`这是一段${type}提示`, closeCallback)
}

export default () => types.map(type => (<Button color={type} key={type} onClick={() => Atoast[type](`这是一段${type}提示`)}> {type}</Button>))


```

<API></API>