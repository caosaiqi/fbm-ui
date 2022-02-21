---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# Upload 上传组件
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
        
import { Demo, Upload, Button, DocumentUploadIcon} from 'fbm-ui'

export default () =>{
  const [age, setAge] = React.useState(20)

  const props = {
    name: 'file',
    action: '/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  };
  return (
    <Demo>
      <Upload  {...props}>
        上传
      </Upload>
    </Demo>
  )
}
```

```tsx
/**
 * title: 拖拽上传
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, Upload, Button, DocumentUploadIcon} from 'fbm-ui'

export default () =>{
  const [age, setAge] = React.useState(20)

  const props = {
    type: 'drop',
    name: 'file',
    action: '/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  };
  return (
    <Demo white>
      <Upload  {...props} />
    </Demo>
  )
}
```

```tsx
/**
 * title: 不显示uploadList
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, Upload, Button, DocumentUploadIcon} from 'fbm-ui'

export default () =>{
  const [age, setAge] = React.useState(20)

  const props = {
    type: 'drop',
    name: 'file',
    action: '/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    showUploadList: false,
  };
  return (
    <Demo white>
      <Upload  {...props} />
    </Demo>
  )
}
```


```tsx
/**
 * title: 自定义进度条信息
 * desc: itemRender
 */
import * as React from 'react';
        
import { Demo, Upload, Button, DocumentUploadIcon} from 'fbm-ui'

export default () =>{
  const [age, setAge] = React.useState(20)

  const props = {
    name: 'file',
    action: '/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    itemRender: ({ status }) => {
      return <div> { status } </div>
    }
  };
  return (
    <Demo>
      <Upload  {...props}>
        上传
      </Upload>
    </Demo>
  )
}
```