---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# upload 上传组件
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
        <Button variant="outlined" color='inherit'>
          上传
        </Button>
      </Upload>
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
        <Button variant="outlined" color='inherit'>
          上传
        </Button>
      </Upload>
    </Demo>
  )
}
```