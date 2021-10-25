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
import { Alayout, Atypography } from 'avocado-ui'

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
        <Atypography variant={tag} color={color}>
          tag: {tag} &nbsp;
          color: {color}  &nbsp;
          hello Typography
        </Atypography>
      </div>,
    )
  })
})

export default () => (
  <Alayout>
     {typographys}
  </Alayout>
)

```

<API></API>