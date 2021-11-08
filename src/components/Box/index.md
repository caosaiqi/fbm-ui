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
import { Box, Layout , Typography, Divider, Switch} from 'fbm-ui'

export default () =>{
  const [loading, setLoading] = React.useState(true)
  return (
  <Layout>
    <Box mb={3} >
      <Switch
        checked={loading}
        onChange={(e) => setLoading(!loading)}
      />
    </Box>
    <Box loading={{
      loading,
       desc: '这是loaidng 一段描述文案',
       size: 35,
    }}>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <br />
    </Box>
    <Divider />
    <Box loading={loading}>
       <br />
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Box>

  </Layout>
)
}
```

```tsx
/**
 * title: disabled
 * desc: 禁用某个模块
 */
import * as React from 'react';
import { Box, Layout , Typography, Switch, Paper } from 'fbm-ui'

export default () =>{
  const [disabled, setDisabled] = React.useState(true)
  return (
    <Layout>
      <Box disabled elevation={10} sx={{ padding: 12 }}> 
         <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
      </Box>
    </Layout>
  )
}
```


```tsx
/**
 * title: Paper
 */
import * as React from 'react';
import { Button, Layout , Typography, Paper } from 'fbm-ui'

export default () =>{
  const [elevation, setElevation] = React.useState(0)
  return (
    <Layout>

      <Button onClick={() => setElevation((elevation <= 25 ? elevation + 1 : 0))}>
        elevation {elevation}
      </Button>

      <Paper elevation={elevation} sx={{ padding: '20px', mt: '30px'}}> 
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
      </Paper>
    </Layout>
  )
}
```

<API></API>