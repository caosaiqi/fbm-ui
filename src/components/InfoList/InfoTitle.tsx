import React, { ReactNode } from 'react';
import Box from '../Box';
import Typography from '../Typography';
import styled from '@mui/material/styles/styled';

export interface InfoTitleProps {
  title: string | ReactNode;
}

const InfoTitle = (props: InfoTitleProps) => {
  const { title } = props;
  const InfoTitleRoot = styled(Box)(({ theme }) =>( {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    paddingLeft: theme.spacing(4.5),
  }))

  return (
    <InfoTitleRoot>
      <Typography variant="h6" fontSize={16} weight="medium">{title}</Typography>
    </InfoTitleRoot>
  )
}

export default InfoTitle;