import * as React from 'react';
import { ListItem, ListItemProps, ListItemIcon, ListItemText } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

const componentName: string = 'AlistRow'

export interface ListRowPropos extends ListItemProps {
  text?: string | string[];
  before?: React.ReactNode;
  children?: React.ReactNode;
  after?: React.ReactNode;
}

const AuiAvatar: React.FC<ListRowPropos> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: componentName });

  const {
    before,
    text,
    after,
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

  return (
    <ListItem secondaryAction={after} {...otherProps}>
      <Before key='icon' />
      <Text key='text' />
    </ListItem>
  )
}

export default AuiAvatar
