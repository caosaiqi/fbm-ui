---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# InfoList 信息列表
## 代码演示
```tsx
/**
 * desc: demo1
 */

import { InfoList, Demo, Chip, Box, Dialog, Button, Avatar, TextField, useTextField, rules, Popconfirm } from 'fbm-ui';
import React, { useState, useEffect, useMemo } from 'react';

  const Chips = (props) => {
    const { options } = props;
    return (
      <Box>
        {
          options.map(n => (
            <Chip key={n} label={n} />
          ))
        }
      </Box>
    )
  }

  const dataInit = {
    name: '小明',
    phone: 12312321,
    department: ['测试1', '测试2'],
    portrait: '',
    password: '*****'
  }

const PopButton = (props) => {
  const { onChange, name } = props;
  const [value, setValue] = useState(name);
  const nameTextField = useTextField({
    value,
    label: '姓名',
    rules: [rules.required()],
    onChange: (e) => {
      setValue(e.target.value)
    },
    max: 12,
    sx: {
      height: '68px'
    }
  });
  const handleOk = async ({ onClose }) => {
    //验证
    const isError = await nameTextField.handleValidate()
    if (isError) return
    // fetch
    onChange(value)
    // 关闭弹框
    onClose()
  }
  return (
    <Popconfirm
      title="修改名称"
      content={
        <Box sx={{ width: '360px', }}>
          <TextField {...nameTextField}/>
        </Box>
      }
      onOk={handleOk}
      >
      <Button variant="text" size="medium">修改</Button>
    </Popconfirm>
  )
}

export default () => {

  const [open, setOpen] = useState(false);

  const [data, setData] = useState(dataInit);

  const DialogAction = (props) => {
    return (
      <Dialog
        open={props.open}
        title="测试"
        onClose={() => setOpen(false)}
      />
    )
  }

  const rows = [
    {
      id: 'portrait',
      label: '头像',
      render: <Avatar />
    },
    {
      id: 'name',
      label: '姓名',
      render: (row) => {
        return <h6>{row}</h6>
      },
      actions: [{
        text: '修改',
        onClick: (e) => {
          console.log(111, e)
        },
      }],
      renderAction: () => {
        return <PopButton name={data.name} onChange={(name) => setData({...data, name })} />;
      },
    },
    {
      id: 'phone',
      label: '手机号',
      actions: [{
        text: '修改',
        onClick: () => {
          setOpen(true)
        },
      }],
    },
    {
      id: 'department',
      label: '所属分部',
      render: (row) => {
        return <Chips options={row}></Chips>
      }
    },
  ];

  return (
    <Demo white>
      <InfoList
        title="测试"
        rows={rows}
        data={data}
      />
      <DialogAction open={open} />
    </Demo>
  )
}

```



```tsx

/**
 * desc: demo2
 */

import React, { useState } from 'react';
import { TextField, useTextField, rules, Box, Button, Demo, InfoList, Typography } from 'fbm-ui';
export default () => {
  const [data, setData] = useState({ name: '小明' });
  const RenderEdit = (props) => {
    const { data, label } = props;
    const [value, setValue] = useState(data);
    const [isEdit, setIsEdit] = useState(false);
    const nameTextField = useTextField({
      value,
      label,
      rules: [rules.required()],
      onChange: (e) => {
        setValue(e.target.value);
      },
      max: 12,
      sx: {
        height: '68px'
      }
    });


    const handleClick = () => {
      setIsEdit(false)
    }

    return (
      <>
        <Box p={2}>
          {
            isEdit ? (
              <Box>
                <TextField {...nameTextField}/>
                <Box>
                  <Button style={{ marginRight: '10px' }} onClick={handleClick}>保存</Button>
                  <Button onClick={handleClick}>取消</Button>
                </Box>
              </Box>
            ) : (
              <Typography variant="body2">{value}</Typography>
            )
          }
        </Box>
        {
          !isEdit && (
          <Box className="action-hover">
            <Button variant="text" size="text" onClick={() => setIsEdit(true)}>修改</Button>
          </Box>
          )
        }
      </>
    )
  }

  const rows = [
    {
      id: 'name',
      label: '姓名',
      render: <RenderEdit data={data.name} label="姓名" />
    }
  ]

  return (
    <Demo white>
      <InfoList
        title="测试"
        rows={rows}
        data={data}
      />
    </Demo>
  )
}


```

<API></API>