import * as React from 'react';
import { Box } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

import Logo, { AlogoProps } from '../../Logo'

export interface HeaderPrpos {
  children?: React.ReactNode,
  logo?: AlogoProps
}

const HeaderRoot = styled(Box, {
  name: 'Aheader',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const Header: React.FC<HeaderPrpos> = ({
  children,
  logo,
}) => {
  const LogoRender = () => {
    if (logo === null) return null
    return  <Logo {...logo} />
  }

  return (
    <HeaderRoot>
      <LogoRender />
      {children}
    </HeaderRoot>
  )
}

export default Header
