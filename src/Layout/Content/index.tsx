import * as React from 'react';
import { Box } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

export const componentName: string = 'AlayoutContent'

export interface AlayoutContentProps {
  children: React.ReactNode,
}

const AlayoutContentRoot: React.FC<AlayoutContentProps> = styled(Box, {
  name: 'AlayoutContent',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const Content: React.FC<AlayoutContentProps> = ({ children }) => (
  <AlayoutContentRoot>
    {children}
  </AlayoutContentRoot>
)

export default Content
