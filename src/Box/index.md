---
nav:
  title: 组件
  path: /components
group:
  title: Box 容器
---
# Box 容器
## 代码演示

```tsx
/**
 * title: loading
 * desc: 给某个模块添加loaidng
 */
import * as React from 'react';
import { Abox, Alayout , Atypography, Divider, Switch} from 'fbm-ui'

export default () =>{
  const [loading, setLoading] = React.useState(true)
  return (
  <Alayout>
    <Abox mb={3}>
      <Switch
        checked={loading}
        onChange={(e) => setLoading(!loading)}
      />
    </Abox>
    <Abox loading={{
      loading,
       desc: '这是loaidng 一段描述文案',
       size: 35,
    }}>
      <Atypography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Atypography>
      <br />
    </Abox>
    <Divider />
    <Abox loading={loading}>
       <br />
      <Atypography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Atypography>
    </Abox>

  </Alayout>
)
}
```

```tsx
/**
 * title: disabled
 * desc: 禁用某个模块
 */
import * as React from 'react';
import { Abox, Alayout , Atypography, Switch} from 'fbm-ui'

export default () =>{
  const [disabled, setDisabled] = React.useState(true)
  return (
    <Alayout>
      <Abox mb={3}>
        <Switch
          checked={disabled}
          onChange={(e) => setDisabled(!disabled)}
        />
      </Abox>
      <Abox disabled={disabled} sx={{
        display: 'inline-block',
      }}>
        <Atypography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Atypography>
      </Abox>
    </Alayout>
  )
}
```

<API></API>