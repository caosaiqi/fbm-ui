import * as React from 'react';
import { Menu, MenuProps } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

import getStyleOverrides from '../utils/getStyleOverrides'

const componentName: string = 'Menu'

export interface AuiMenuPropos extends MenuProps {
}

const AuiMenu: React.FC<AuiMenuPropos> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: componentName });
  const overrides = getStyleOverrides(componentName)
  
  return <h1>hello</h1>
}


export default AuiMenu
