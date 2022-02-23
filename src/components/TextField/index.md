---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# TextField 带验证的输入框
## 代码演示

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, TextField,  useTextField, Button } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')

 const nameFieldProps = useTextField({
    value,
    max: 5,
    rules: [{
      required: true,
    }],
    onChange: (event) => {
      setValue(event.target.value)
    },
  })

  const handleSubmit = async () => {
    const error:string = await nameFieldProps.handleValidate()
    console.log(error, nameFieldProps)
  }

  return (
    <Layout>
      <TextField {...nameFieldProps} />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Layout>
  )
}
```

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, TextField, rules, useTextField, Button, SearchIcon, DatePicker, Select } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState(null)

  const handleChange = (event) => {
    setValue(event)
  }

 const dateFieldProps = useTextField({
    value,
    rules: [rules.required()],
    onChange: handleChange,
  })

  const handleSubmit = async () => {
    const f = await dateFieldProps.handleValidate()
    console.log(dateFieldProps)
  }

  return (
    <Layout>
      <TextField error={dateFieldProps.error}>
        <DatePicker  {...dateFieldProps.InputProps} />
      </TextField>
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Layout>
  )
}
```

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Layout, TextField, rules, useTextField, Button, SearchIcon, DatePicker, Select } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState(2)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

 const dateFieldProps = useTextField({
    value,
    rules: [rules.required()],
    onChange: handleChange,
  })

  const handleSubmit = async () => {
    dateFieldProps.handleValidate()
  }
   const options = [
    {
      label: '全部',
      value: '',
    },
    {
      label: '20岁',
      value: 20
    },
    {
      label: '男',
      value: 2
    }
  ]

  return (
    <Layout>
      <TextField error={dateFieldProps.error}>
        <Select 
          options={options} 
          {...dateFieldProps.InputProps}
        />
      </TextField>
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Layout>
  )
}
```

```tsx
/**
 * title: standard
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    value,
    max: 5,
    onChange: handleChange,
    rules: [rules.required()],
    variant: 'standard',
    onClear: () => {
      setValue('')
    },
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
  }

  return (
    <Demo white={true}>
      <TextField
        size="small"
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Demo>
  )
}

```

```tsx
/**
 * title: textarea
 * desc: 基本使用
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    value,
    rules: [rules.required()],
    onChange: handleChange,
    sx: {
      height: 'auto',
    },
    InputProps: {
      rows:3 ,
      placeholder: '内容',
      multiline: true,
      inputProps: {
        maxLength: 3,
      }
    }
  })

  const handleSubmit = async () => {
    nameFieldProps.handleValidate()
  }

  return (
    <Demo white={true}>
      <TextField
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Demo>
  )
}

```

```tsx
/**
 * title: 基本
 * desc: 基本使用
 */
import * as React from 'react';
import { Autocomplete } from '@mui/material'
import { Layout, rules, Button, SearchIcon,TextField } from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef(null)

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

  return (
    <Layout>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => {
          return <input {...params.inputProps} />
        }}
      />
    </Layout>
  )
}

```


```tsx
/**
 * title: 类组件使用TextField
 * desc: 如果校验规则想使用组件的校验规则即useTextField 需要配合useImperativeHandle调用子组件方法
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'
import { FbmInputProps } from '../Input';

class DemoForTextField extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
    this.exampleRef = React.createRef();
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  
  handleSubmit = async () => {
    const isError = await this.exampleRef.current.validate();
    // todo
  };

  render() {
    return (
    <Demo white={true}>
      <Example
        ref={this.exampleRef}
        onChange={this.onChange}
        value={this.state.value}
      />
      <Button onClick={this.handleSubmit}> 提交 </Button> 
    </Demo>
    )
  }
}
export default DemoForTextField;

interface ExampleProps {
  onChange: FbmInputProps['onChange'],
  value: string,
}
const Example: React.FC<ExampleProps> = React.forwardRef(({ 
  onChange,
  value,
 }, ref) => {

  const nameFieldProps = useTextField({
    value,
    onChange: (e) => onChange(e),
    rules: [rules.required()],
  })

  React.useImperativeHandle(ref, () => {
     return {
       validate() {
         return nameFieldProps.handleValidate();
       }
     }
  });

  return (
    <TextField
      {...nameFieldProps}
    />
  );
})
```

```tsx
/**
 * title: 输入校验
 * desc: 校验是实时校验,暂时提供的校验规则有手机号，邮箱和必填项(required, mobile, email), 也可自定义校验
 */
import * as React from 'react';
import { Demo, TextField, rules, useTextField, Button, SearchIcon} from 'fbm-ui'

export default () => {
  const [value, setValue] = React.useState('')
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const nameFieldProps = useTextField({
    value,
    rules: [rules.required(), rules.mobile('手机号不正确'), () => {
      // 此处为自定义校验
      // 若返回undefined 则表示校验通过 返回其他内容则作为提示给用户
      return '输入不正确';
    }],
    onChange: handleChange,
    sx: {
      height: 'auto',
    },
    inputProps: {
      placeholder: '内容',
    }
  })

  const handleSubmit = async () => {
    // handleValidate 会将rules的校验再次校验一次 返回值为一个promise（永远为resolve状态）多个useTextField使用可以使用Promise.all（但是建议使用Form）
    const isError = await nameFieldProps.handleValidate();
  }

  return (
    <Demo white={true}>
      <TextField
        {...nameFieldProps}
      />
      <Button onClick={handleSubmit}> 提交 </Button> 
    </Demo>
  )
}

```
