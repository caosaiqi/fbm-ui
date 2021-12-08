---
nav:
  title: 组件
  path: /components
group:
  title: Typography 文字铸排
---
# Typography 文字铸排
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, Typography } from 'fbm-ui'

const colors = [
  'error',
  'warning',
  'success',
  'info',
  'secondary',
  'primary',
  'disabled',
]
const tags = [
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
]
const typographys: JSX.Element[] = []

tags.forEach(tag => {
  colors.forEach(color => {
    typographys.push(
      <div key={`${tag}${color}`} style={{ marginBottom: 10 }}>
        <Typography variant={tag} color={color}>
          variant: {tag} &nbsp;
          color: {color}  &nbsp;
          hello Typography
        </Typography>
      </div>,
    )
  })
})

export default () => (
  <Layout>
     {typographys}
  </Layout>
)

```

<API></API>