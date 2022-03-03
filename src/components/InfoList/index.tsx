import React, { FC } from 'react';
import styled from '@mui/material/styles/styled';

import InfoTitle, { InfoTitleProps } from './InfoTitle';
import InfoItem, { Row } from './InfoItem';
import Box from '../Box';

export interface InfoListProps {
  /** 标题 */
  title?: InfoTitleProps['title'];
  /** 数据源 */
  data: any;
  /** 行格式要求 */
  rows: Array<Row>;
  /** 是否显示loading */
  loading?: boolean;
  /** title额外属性 */
  titleProps?: object;
  // todo style
}

const InfoList: FC<InfoListProps> = (props) => {
  const { data, title, loading, rows, titleProps } = props;
  return (
    <Box loading={loading} sx={{
      border: '1px solid #ededed'
    }}>
      {title && <InfoTitle title={title} {...titleProps} />}
      <Box>
      {
        (rows || []).map((n) => (
          <InfoItem
            key={n.id}
            row={n}
            data={data ? data[n.id] : ''}
          />
        ))
      }
      </Box>
    </Box>
  )
}

InfoList.defaultProps = {
  data: {},
  loading: false
}

export default InfoList;
