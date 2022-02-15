import React, { ReactNode, useMemo } from 'react';
import styled from '@mui/material/styles/styled';
import Box from '../Box';
import Actions, { FbmActionProps } from '../Actions';
import Typography from '../Typography';
import { isFunction } from '../../utils';

export interface row {
  /** 左侧标签 */
  label: string;
  /** InfoItem 标识 */
  id: string;
  /** 右侧内容 */
  render?: string | Function | ReactNode;
  /** 辅助文字  当render无内容时显示该文字  辅助文字颜色不同rgba(0, 0, 0, 0,56) */
  auxiliaryText?: string;
  /** 右侧按钮属性 */
  actions?: FbmActionProps['actions'];
  /** 自定义按钮内容 */
  renderAction?: string | Function | ReactNode;
}

export interface InfoItemProps {
  row: row,
  data: any
}

const InfoItemRoot = styled(Box)(({ theme }) => ({
  minHeight: '60px',
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: theme.spacing(4.5),
  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  '& .action-hover': {
    position: 'absolute',
    top: '50%',
    right: theme.spacing(2),
    transform: 'translateY(-50%)',
    visibility: 'hidden',
  },
  '&:hover .action-hover': {
    visibility: 'visible',
  }
}));


/**
 * @description: 右侧内容渲染函数  主要区分点：渲染的颜色不同
 * @param {*} a 正常文字
 * @param {*} b disabledEdit 禁止点击
 * @param {*} c auxiliaryText 辅助文字
 */

const renderRigthContent = (a, b, c) => {
  const colorConfig: { color?: string } = {}
  if (b) {
    colorConfig.color = 'disabled';
  } else if (!a && c) {
    colorConfig.color = 'secondary'
  }
  return <Typography variant="body2" {...colorConfig}>{a || c}</Typography>
}

/**
 * @description: 自定义---渲染action
 * @param a renderAction | render
 */
const renderElement = (a, ...rest) => {
if (isFunction(a)) {
    return a(...rest)
  } else {
    return a;
  }
}

interface RightContentProps {
  renderProps: row['render'];
  data: any;
  disabledEdit: boolean;
  auxiliaryText: row['auxiliaryText'];
}
const RightContent = (props: RightContentProps) => {
  const { renderProps, data, disabledEdit, auxiliaryText } = props;
  if (renderProps) {
    return renderElement(renderProps, data);
  } else {
    return renderRigthContent(data, disabledEdit, auxiliaryText);
  }
}

interface HoverActionsProps {
  actions: row['actions'],
  renderActionsProps: row['renderAction']
}
const HoverActions = (props: HoverActionsProps) => {
  const { renderActionsProps, actions } = props;
  return (
    <Box className="action-hover">
      {
        !!renderActionsProps ? renderElement(renderActionsProps) : (<Actions actions={actions} />)
      }
    </Box>
  );
}

const InfoItem = (props: InfoItemProps) => {
  const { row, data } = props;
  const {
    label,
    actions,
    renderAction: renderActionsProps,
    render: renderProps,
    auxiliaryText
  } = row || {};

  const disabledEdit = useMemo(() => actions?.length < 1 && !renderActionsProps, [actions, renderActionsProps]);

  return (
    <InfoItemRoot>
      <Typography variant="body2" color="secondary" weight="medium" width={165}>{label}</Typography>
      <Box flex={1} position="relative">
        <RightContent
          renderProps={renderProps}
          data={data}
          auxiliaryText={auxiliaryText}
          disabledEdit={disabledEdit}
          />
        {
          !disabledEdit && <HoverActions renderActionsProps={renderActionsProps} actions={actions} />
        }
      </Box>
    </InfoItemRoot>
  )
}

InfoItem.defaultProps = {
  popConfirmProps: {},

}

export default InfoItem;