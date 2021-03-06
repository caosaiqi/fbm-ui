import * as React from 'react';
import { Box, BoxProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import useThemeProps from '@mui/material/styles/useThemeProps'

import Menu, { MenuPrpos } from '../Menu'

export const componentName: string = 'LayoutContent'

export interface LayoutContentProps {
  children: React.ReactNode,
  menu?: MenuPrpos,
}

interface ContentRootProps extends BoxProps {
  ownerState: object
}
const ContentRoot: React.FC<ContentRootProps> = styled(Box, {
  name: 'LayoutContent',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  background: theme.palette.background.default,
}))

interface PageRootProps extends BoxProps {}
const PageRoot: React.FC<PageRootProps> = styled(Box, {
  name: 'LayoutPage',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({
}))

const LayoutContent: React.FC<LayoutContentProps> = (inProps) => {
  const {
    children,
    menu,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const MenuRender = () => {
    if (!menu) return null
    return <Menu {...menu} />
  }

  const ownerState = {
    flex: menu && !!menu.menus,
  }

  return (
    <ContentRoot ownerState={ownerState} {...otherProps} >
      <MenuRender />
      <PageRoot>
        {children}
      </PageRoot>
    </ContentRoot>
  )
}

export default LayoutContent