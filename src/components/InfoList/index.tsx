import React, { ReactNode } from 'react';
import InfoTitle, { InfoTitleProps } from './InfoTitle';
import InfoItem, { InfoItemProps, row } from './InfoItem';
import Box from '../Box';

export interface InfoListProps {
  /** 标题 */
  title?: InfoTitleProps['title'];
  /** 数据源 */
  data: any;
  /** 行格式要求 */
  rows: Array<row>;
  /** 是否显示loading */
  loading?: boolean;
  // todo style
}

const InfoList = (props: InfoListProps) => {
  const { data, title, loading, rows } = props;
  return (
    <Box loading={loading} border={'1px solid rgba(0, 0, 0, 0.08)'}>
      {title && <InfoTitle title={title} />}
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
  data: {}
}

export default InfoList;