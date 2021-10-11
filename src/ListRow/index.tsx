import * as React from 'react';
import { ListItem, ListItemProps, ListItemIcon, ListItemText, IconButton, IconButtonProps, Box } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

const componentName: string = 'ListRow'

export interface ListRowPropos extends ListItemProps {
  text?: string | string[];

  before?: React.ReactNode;
  children?: React.ReactNode;
  after?: React.ReactNode;
  afterButtonProps?: IconButtonProps | Boolean
}

const AuiAvatar: React.FC<ListRowPropos> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: componentName });

  const {
    before,
    text,
    after,
    afterButtonProps,
    ...otherProps
  } = props

  const Before = () => {
    if (!before) return null
    return <ListItemIcon> {before} </ListItemIcon>
  }

  const Text = () => {
    if (!text) return null

    let textArr: any = text
    if (typeof text === 'string') {
      textArr = [text]
    }

    const [primary, secondary] = textArr
    return (
      <ListItemText
        primary={primary}
        secondary={secondary}
      />
    )
  }

  const After = () => {
    if (!after) return null
    if (afterButtonProps) {
      const btnProps = 
            typeof afterButtonProps === 'boolean'
            ? { edge: 'end' } 
            : afterButtonProps
      
      return (
        <IconButton {...btnProps}>
          {after}
        </IconButton>
      )
    }
    return <Box>{after}</Box>
  }

  return (
    <ListItem secondaryAction={<After />} {...otherProps}>
      <Before key='icon' />
      <Text key='text' />
    </ListItem>
  )
}

export default AuiAvatar
