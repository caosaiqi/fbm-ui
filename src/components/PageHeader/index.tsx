import React from 'react';
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Typography from '../Typography'
import Button, { FbmButtonProps } from '../Button'
import Popactions from '../Popactions'


interface ActionItemType extends FbmButtonProps {
  actions: FbmButtonProps[]
}

interface PropsType {
  title?: React.ReactNode;
  actions?: ActionItemType[]
}

const PageHeaderRoot = styled(Box)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
})


const ActionsRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const TitleRender: React.FC = ({ children }) => (
  <Box sx={{ flex: 1 }}>
    <Typography variant='h5'>
      {children}
    </Typography>
  </Box>
)

const ActionsRender: React.FC<PropsType> = ({ actions }) => {
  const actionBtns = actions.map((actionsItems) => {
    const { text, actions: subActons, ...buttonProps } = actionsItems
    if (subActons && subActons.length > 0) {
      return (
        <Popactions key={actionsItems.text} actions={subActons}>
          <Button sx={{ ml: '17px' }} {...buttonProps}>
            {text}
          </Button>
        </Popactions>
      )
    }
    return (
      <Button sx={{ ml: '17px' }} key={actionsItems.text} {...buttonProps}>
        {text}
      </Button>
    )
  })
  return (
    <ActionsRoot>
      {actionBtns}
    </ActionsRoot>
  )
}

const PageHeader: React.FC<PropsType> = ({
  title,
  actions
}) => {
  return (
    <PageHeaderRoot>
      <TitleRender> {title} </TitleRender>
      <ActionsRender actions={actions} />
    </PageHeaderRoot>
  )
}

PageHeader.defaultProps = {
  title: '',
  actions: []
}

export default PageHeader