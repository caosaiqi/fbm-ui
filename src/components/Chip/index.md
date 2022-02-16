---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# Chip 标签
## 代码演示

 ```tsx
/**
 * title: 基本
 * desc: Chip有三种大小
 */
import * as React from 'react';
import { Demo, Box, Chip } from 'fbm-ui'

export default () => {
  return (
    <Demo>
      <Box sx={{ mb: 2}}>
        <Chip
          color={'primary'}
          label={'小标签'}
          size="small"
          sx={{ mr: 3 }}/>
        <Chip
          color={'primary'}
          label={'中标签'}
          size="medium"
          sx={{ mr: 3 }}/>

        <Chip 
          color={'primary'}
          label={'大标签'}
          size="large"
          sx={{ mr: 3 }}/>
      </Box>

       <Box>
        <Chip
          variant="filled"
          color={'primary'}
          label={'小标签'}
          size="small"
          sx={{ mr: 3 }}/>
        <Chip
          variant="filled"
          color={'primary'}
          label={'中标签'}
          size="medium"
          sx={{ mr: 3 }}/>
        <Chip 
          variant="filled"
          color={'primary'}
          label={'大标签'}
          size="large"
          sx={{ mr: 3 }}/>
      </Box>
    </Demo>
  )
}
```

```tsx
/**
 * title: 基本颜色
 * desc: 'default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'
 */
import * as React from 'react';
import { Demo, Box, Chip } from 'fbm-ui'

export default () => {
  const colors = ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']

  return (
    <Demo>
      <Box sx={{mb: 2}}>
        {colors.map((color) => 
          <Chip 
            color={color}
            label={color}
            sx={{ mr: 3 }}/>
          )
        }
      </Box>
      <Box>
        {colors.map((color) => 
          <Chip
            variant="filled"
            color={color}
            label={color}
            sx={{ mr: 3 }}/>
          )
        }
      </Box>
    </Demo>
  )
}
```

 ```tsx
/**
 * title: onDelete
 * desc: 带删除icon的chip
 */
import * as React from 'react';
import { Demo, Box, Chip } from 'fbm-ui'

export default () => {
  const colors = ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']
  
  const handleDelete = () => {

  }

  return (
    <Demo>
      <Box sx={{ mb: 2}}>
        {colors.map((color) => 
          <Chip 
            sx={{ mr: 3 }}
            color={color}
            label={color}
            onDelete={() => handleDelete(color)}
          />)
        }
      </Box>

       <Box  sx={{ mb: 2}}>
        {colors.map((color) => 
          <Chip 
            size="large"
            color={color}
            label={color}
            sx={{ mr: 3 }}
            onDelete={() => handleDelete(color)}
          />
          )
        }
      </Box>

      <Box sx={{ mb: 2}}>
        {colors.map((color) => 
          <Chip 
            variant="filled"
            sx={{ mr: 3 }}
            color={color}
            label={color}
            onDelete={() => handleDelete(color)}
          />)
        }
      </Box>

       <Box>
        {colors.map((color) => 
          <Chip 
            variant="filled"
            size="large"
            color={color}
            label={color}
            sx={{ mr: 3 }}
            onDelete={() => handleDelete(color)}
          />
          )
        }
      </Box>
    </Demo>
  )
}
```

 ```tsx
/**
 * title: Avatar chip
 */ 
import * as React from 'react';
import { Demo, Chip, Avatar, Box } from 'fbm-ui'

export default () => {
  const colors = ['default', 'primary' , 'error', 'info', 'success', 'warning']
  const avatar = <Avatar src="https://joeschmoe.io/api/v1/random" />
  return (
    <Demo>
      <Box sx={{ mb: 2}}>
        {colors.map((color) => (
          <Chip
            avatar={avatar}
            color={color} 
            label={color} 
            sx={{ mr: 3 }}
          />
        ))}
      </Box>
      <Box sx={{ mb: 2}}>
        {colors.map((color) => (
          <Chip
            size="large"
            avatar={avatar}
            color={color} 
            label={color} 
            sx={{ mr: 3 }}
          />
        ))}
      </Box>

       <Box sx={{ mb: 2}}>
        {colors.map((color) => (
          <Chip
            variant="filled"
            avatar={avatar}
            color={color} 
            label={color} 
            sx={{ mr: 3 }}
          />
        ))}
      </Box>
      <Box sx={{ mb: 2}}>
        {colors.map((color) => (
          <Chip
            variant="filled"
            size="large"
            avatar={avatar}
            color={color} 
            label={color} 
            sx={{ mr: 3 }}
          />
        ))}
      </Box>
    </Demo>
  )
}
```

<API></API>