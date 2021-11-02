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
 * desc: 精简版Formik
 */
import * as React from 'react';
import {  Alayout, Abutton, Abox, ButtonGroup, Button, Aicon} from 'fbm-ui'

export default () => (
  <Alayout>
    <Abox>
      <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}} size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}} size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}} size="large">按钮</Abutton> 
      </Abox>
       <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} size="large">按钮</Abutton> 
      </Abox>
      <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}}  variant="outlined" size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}}  variant="outlined" size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}}  variant="outlined" size="large">按钮</Abutton> 
      </Abox>
       <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="outlined" size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="outlined" size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="outlined" size="large">按钮</Abutton> 
      </Abox>
      <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}} variant="text" size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}} variant="text" size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}} variant="text" size="large">按钮</Abutton> 
      </Abox>
         <Abox sx={{mb: 2}}>
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="text" size="small">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="text" size="medium">按钮</Abutton> 
        <Abutton sx={{mr: 1}} startIcon={<Aicon name="AddIcon"/>} variant="text" size="large">按钮</Abutton> 
      </Abox>
     </Abox>
  </Alayout>
)
```

```tsx
/**
 * title: 按钮组
 */
import * as React from 'react';
import {  Alayout, Abutton, Abox, ButtonGroup, Aicon} from 'fbm-ui'

export default () => (
  <Alayout>
      <ButtonGroup variant="contained" sx={{mb: 2}}>
        <Abutton >按钮</Abutton> 
         <Abutton
          size="small"
        >
          <Aicon name="OverflowIcon"/>
        </Abutton>
      </ButtonGroup>

  </Alayout>
)
```


```tsx
/**
 * title: disabled
 */
import * as React from 'react';
import {  Alayout, Abutton } from 'fbm-ui'

export default () => (
  <Alayout>
    <Abutton disabled>按钮</Abutton> <br/><br/>
    
  </Alayout>
)
```


```tsx
/**
 * title: loading
 */
import * as React from 'react';
import {  Alayout, Abutton, IconButton, CheckIcon} from 'fbm-ui'

export default () => (
  <Alayout>
    <Abutton loading>按钮</Abutton> <br/><br/>

  


  </Alayout>
)
```


```tsx
/**
 * title: IconButton
 */
import * as React from 'react';
import {Alayout, IconButton, CheckIcon} from 'fbm-ui'

export default () => (
  <Alayout>
    
    <IconButton size="small" aria-label="add to shopping cart">
      <CheckIcon />
    </IconButton>

     <br/> 
     
    <IconButton  aria-label="add to shopping cart">
     <CheckIcon />
    </IconButton>
  </Alayout>
)
```

<API></API>