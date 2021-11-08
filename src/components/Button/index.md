---
nav:
  title: 组件
  path: /components
group:
  title: Button 按钮
---
# Button 按钮
## 代码演示

 ```tsx
/**
 * title: 基本
 */
import * as React from 'react';
import {  Layout, Button, Box, ButtonGroup, AddIcon} from 'fbm-ui'

export default () => (
  <Layout>
    <Box>
      <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}} size="small">按钮</Button> 
        <Button sx={{mr: 1}} size="medium">按钮</Button> 
        <Button sx={{mr: 1}} size="large">按钮</Button> 
      </Box>
       <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}} startIcon={<AddIcon />} size="small">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} size="medium">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} size="large">按钮</Button> 
      </Box>
      <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}}  variant="outlined" size="small">按钮</Button> 
        <Button sx={{mr: 1}}  variant="outlined" size="medium">按钮</Button> 
        <Button sx={{mr: 1}}  variant="outlined" size="large">按钮</Button> 
      </Box>
       <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="outlined" size="small">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="outlined" size="medium">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="outlined" size="large">按钮</Button> 
      </Box>
      <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}} variant="text" size="small">按钮</Button> 
        <Button sx={{mr: 1}} variant="text" size="medium">按钮</Button> 
        <Button sx={{mr: 1}} variant="text" size="large">按钮</Button> 
      </Box>
         <Box sx={{mb: 2}}>
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="text" size="small">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="text" size="medium">按钮</Button> 
        <Button sx={{mr: 1}} startIcon={<AddIcon />} variant="text" size="large">按钮</Button> 
      </Box>
     </Box>
  </Layout>
)
```

```tsx
/**
 * title: 按钮组
 */
import * as React from 'react';
import {  Layout, Button, Box, ButtonGroup, OverflowIcon} from 'fbm-ui'

export default () => (
  <Layout>
      <ButtonGroup variant="contained" sx={{mb: 2}}>
        <Button >按钮</Button> 
         <Button
          size="small"
        >
          <OverflowIcon />
        </Button>
      </ButtonGroup>

  </Layout>
)
```


```tsx
/**
 * title: disabled
 */
import * as React from 'react';
import {  Layout, Button } from 'fbm-ui'

export default () => (
  <Layout>
    <Button disabled>按钮</Button> 
  </Layout>
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
    <Button loading>按钮</Button> <br/><br/>

  


  </Layout>
)
```


```tsx
/**
 * title: IconButton
 */
import * as React from 'react';
import {Layout, IconButton, CheckIcon} from 'fbm-ui'

export default () => (
  <Layout>
    
    <IconButton size="small" aria-label="add to shopping cart">
      <CheckIcon />
    </IconButton>

     <br/> 
     
    <IconButton  aria-label="add to shopping cart">
     <CheckIcon />
    </IconButton>
  </Layout>
)
```

<API></API>