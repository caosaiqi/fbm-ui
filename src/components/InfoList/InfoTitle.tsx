import React, { ReactNode, FC } from 'react';
import styled from '@mui/material/styles/styled';

import Box from '../Box';
import Typography from '../Typography';

export interface InfoTitleProps {
  title: ReactNode;
}

const InfoTitleRoot = styled(Box)(({ theme }) =>( {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 60,
  paddingLeft: theme.spacing(4.5),
}));

const InfoTitle: FC<InfoTitleProps> = (props) => {
  const { title } = props;

  return (
    <InfoTitleRoot>
      <Typography variant="h6" fontSize={16} weight="medium">{title}</Typography>
    </InfoTitleRoot>
  )
}

export default InfoTitle;
