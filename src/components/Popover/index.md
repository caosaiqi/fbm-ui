---
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Popover 基础弹框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import {  Popover, Button, Layout } from 'fbm-ui'


export default () =>{
  const [open, setOpen] = React.useState(true)
  const content =(
    <div style={{height: 100, width: 600}}>
      <h1>🥑 鳄梨科技</h1>
    </div>
  )

  return (
    <Layout>
      <Popover content={content} trigger="hover">
        <Button  sx={{ m: 0.5 }}>hover</Button>
      </Popover>
      <Popover content={content} >
        <Button  sx={{ m: 0.5 }}>Click</Button>
      </Popover>
    </Layout>
  )
}
```

```tsx
/**
 * title: 弹框的位置
 * desc: 有 12 个位置选项，而是依靠源头发出的运动来传递方向。
 */
import * as React from 'react';
import {  Popover, Button, Layout, Box } from 'fbm-ui'
import { Grid } from '@mui/material'

export default () =>{
  const [open, setOpen] = React.useState(true)
  const content = (
    <div style={{height: 50, width: 100}}>
      <h2>🥑 鳄梨科技</h2>
    </div>
  )

  return (
    <Layout>
     <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Popover content={content} placement="top-start" trigger="hover">
            <Button sx={{ m: 0.5 }}>top-start</Button>
          </Popover>
          <Popover content={content}  placement="top" >
            <Button sx={{ m: 0.5 }}>top</Button>
          </Popover>
          <Popover content={content} placement="top-end" trigger="hover">
            <Button sx={{ m: 0.5 }}>top-end</Button>
          </Popover>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Popover content={content} placement="left-start" trigger="hover">
            <Button sx={{ m: 0.5 }}>left-start</Button>
          </Popover>
          <br />
          <Popover content={content} placement="left" trigger="hover">
            <Button sx={{ m: 0.5 }}>left</Button>
          </Popover>
          <br />
          <Popover content={content} placement="left-end" trigger="hover">
            <Button sx={{ m: 0.5 }}>left-end</Button>
          </Popover>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Popover content={content} placement="right-start" trigger="hover">
              <Button sx={{ m: 0.5 }}>right-start</Button>
            </Popover>
          </Grid>
          <Grid item>
            <Popover content={content} placement="right" trigger="hover">
              <Button sx={{ m: 0.5 }}>right</Button>
            </Popover>
          </Grid>
          <Grid item>
            <Popover content={content} placement="right-end" trigger="hover">
              <Button sx={{ m: 0.5 }}>right-end</Button>
            </Popover>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Popover content={content} placement="bottom-start" trigger="hover"> 
            <Button sx={{ m: 0.5 }}>bottom-start</Button>
          </Popover>
          <Popover content={content} placement="bottom" trigger="hover">
            <Button sx={{ m: 0.5 }}>bottom</Button>
          </Popover>
          <Popover content={content} placement="bottom-end" trigger="hover">
            <Button sx={{ m: 0.5 }}>bottom-end</Button>
          </Popover>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  )
}
```
