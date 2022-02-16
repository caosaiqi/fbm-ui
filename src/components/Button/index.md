---
nav:
  title: 组件
  path: /components
group:
  order: 1
  title: 通用
---
# Button 按钮
## 代码演示

```tsx
/**
 * title: 基本
 * desc: Button（按钮）组件有三种形式：实心（默认值），文本、以及描边。
 */
import * as React from 'react';
import { Demo, Button, Box, ButtonGroup, AddIcon} from 'fbm-ui'

export default () => (
  <Demo>
    <Button sx={{mr: 1}} >按钮</Button> 
    <Button sx={{mr: 1}} variant="text">按钮</Button> 
    <Button sx={{mr: 1}} variant="outlined">按钮</Button> 
  </Demo>
)
```

```tsx
/**
 * title: 三种按钮大小 
 * desc: small(小) medium(中 默认) large(大)
 */
import * as React from 'react';
import { Demo, Button, Box, ButtonGroup, AddIcon} from 'fbm-ui'

export default () => (
  <Demo>
    <Button sx={{mr: 1}} size="small">按钮</Button> 
    <Button sx={{mr: 1}}>按钮</Button> 
    <Button sx={{mr: 1}} size="large">按钮</Button> 
  </Demo>
)
```

```tsx
/**
 * title: 添加Icon 
 */
import * as React from 'react';
import { Demo, Button, Box, ButtonGroup, AddIcon} from 'fbm-ui'

export default () => (
  <Demo>
    <Button sx={{mr: 1}} size="small" icon={<AddIcon />}>按钮</Button> 
    <Button sx={{mr: 1}} icon={<AddIcon />}>按钮</Button> 
    <Button sx={{mr: 1}} size="large"icon={<AddIcon />}>按钮</Button> 
  </Demo>
)
```

 ```tsx
/**
 * title: 按钮颜色
 * desc: primary(主题色 默认值) error(错误色) warning(警告色) success(成功色) info(信息色) secondary()
 */
import * as React from 'react';
import { Demo, Button, Box, AddIcon} from 'fbm-ui'

export default () => (
  <Demo>
    <Box sx={{ mb: 2}}>
      <Button sx={{mr: 1}}>按钮</Button> 
      <Button sx={{mr: 1}} color='error'>按钮</Button> 
      <Button sx={{mr: 1}} color='warning'>按钮</Button> 
      <Button sx={{mr: 1}} color='success'>按钮</Button> 
      <Button sx={{mr: 1}} color='info'>按钮</Button> 
    </Box>  
    <Box sx={{ mb: 2}}>
      <Button sx={{mr: 1}} variant="outlined" >按钮</Button> 
      <Button sx={{mr: 1}} variant="outlined" color='error'>按钮</Button> 
      <Button sx={{mr: 1}} variant="outlined" color='warning'>按钮</Button> 
      <Button sx={{mr: 1}} variant="outlined" color='success'>按钮</Button> 
      <Button sx={{mr: 1}} variant="outlined" color='info'>按钮</Button> 
      <Button sx={{mr: 1}} variant="outlined" color='inherit'>按钮</Button> 
    </Box>  
    <Box>
      <Button sx={{mr: 1}} variant="text" >按钮</Button> 
      <Button sx={{mr: 1}} variant="text" color='error'>按钮</Button> 
      <Button sx={{mr: 1}} variant="text" color='warning'>按钮</Button> 
      <Button sx={{mr: 1}} variant="text" color='success'>按钮</Button> 
      <Button sx={{mr: 1}} variant="text" color='info'>按钮</Button> 
      <Button sx={{mr: 1}} variant="text" color='inherit'>按钮</Button> 
    </Box>  
  </Demo>
)
```

```tsx
/**
 * title: IconButton
 * desc: small(小) medium(中 默认)
 */
import * as React from 'react';
import {  Demo, IconButton, ClockCircle} from 'fbm-ui'
export default () => (
  <Demo>
    <IconButton size="small"><ClockCircle /></IconButton> 
    <IconButton><ClockCircle /></IconButton> 
  </Demo>
)
```


```tsx
/**
 * title: disabled
 */
import * as React from 'react';
import {  Demo, Button } from 'fbm-ui'

export default () => (
  <Demo>
    <Button disabled>按钮</Button> 
  </Demo>
)
```


 ```tsx
/**
 * title: loading
 */
import * as React from 'react';
import {  Layout, Button, IconButton, CheckIcon} from 'fbm-ui'

export default () => (
  <Layout>
    <Button loading>按钮</Button>
  </Layout>
)
```

<API></API>