---
nav:
  title: 组件
  path: /components
group:
  title: Icon 图标
---
# Icon 图标
## 代码演示

```tsx

import * as React from 'react';
import {  Layout, Grid, Typography, Paper, Message }  from 'fbm-ui'
import toCopy from "copy-to-clipboard";

import  * as icons from './index'

const itemStyle = {
  textAlign: 'center',
  padding: '10px',
  opacity: 0.8,
  
  '&:hover': {
    opacity: 1,
  },
}

const handleCopy = (displayName) => {
  const content = `<${displayName} />`
  const msg = `${content} copied`;
  toCopy(content)
  Message.success(msg)
}

const mapIcon = Object.keys(icons).map((displayName, index) => {
  const Icon = icons[displayName]
  return (
    <Grid
      style={{ cursor: "pointer" }}
      item
      key={displayName}
      xs={2}
      onClick={() => handleCopy(displayName)}
    >
      <Paper sx={itemStyle}>
        <Icon style={{ fontSize: 36 }} />
        <Typography style={{ wordBreak: "break-all" }}>
          {displayName}
        </Typography>
      </Paper>
    </Grid>
  )
})

export default () => (
  <Layout>
     <Grid container spacing={6}>
        {mapIcon}
      </Grid>
  </Layout>
)
```


<API></API>