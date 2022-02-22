import React, { ReactNode, useMemo, FC } from 'react';
import styled from '@mui/material/styles/styled';

import Box from '../Box';
import Actions, { FbmActionProps } from '../Actions';
import Typography from '../Typography';
import { isFunction } from '../../utils';

export interface Row {
  /** 左侧标签 */
  label: string;
  /** InfoItem 标识 */
  id: string;
  /** 使用组件自带的hover效果 */
  useHover?: boolean;
  /** 右侧内容 */
  render?: ReactNode;
  /** 辅助文字  当render无内容时显示该文字  辅助文字颜色不同:rgba(0, 0, 0, 0,56) */
  auxiliaryText?: string;
  /** 右侧按钮属性 */
  actions?: FbmActionProps['actions'];
  /** 自定义按钮内容 */
  renderAction?: ReactNode;
  /** 完全自定义右侧内容 */
  renderRightContent?: ReactNode;
}

export interface InfoItemProps {
  row: Row;
  data: any;
}

const InfoItemRoot = styled(Box)(({ theme }) => ({
  minHeight: '60px',
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: theme.spacing(4.5),
  paddingRight: theme.spacing(2),
  borderTop: '1px solid #f4f4f0',
  '& .actions-container': {
    position: 'absolute',
    top: '50%',
    right: theme.spacing(2),
    transform: 'translateY(-50%)',
  },
  '& .action-hover': {
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
  renderProps?: Row['render'];
  data: any;
  disabledEdit: boolean;
  auxiliaryText?: Row['auxiliaryText'];
  renderRightContent?: Row['renderRightContent'];
}

const RightContent = (props: RightContentProps) => {
  const { renderProps, data, disabledEdit, auxiliaryText, renderRightContent: rightcontent } = props;
  if (rightcontent) return renderElement(rightcontent);
  if (renderProps) {
    return renderElement(renderProps, data);
  } else {
    return renderRigthContent(data, disabledEdit, auxiliaryText);
  }
}


interface HoverActionsProps {
  actions?: Row['actions'];
  renderActionsProps?: Row['renderAction'];
  useHover: boolean;
}

const HoverActions = (props: HoverActionsProps) => {
  const { renderActionsProps, actions, useHover } = props;

  const action = !!renderActionsProps ? renderElement(renderActionsProps) : (<Actions actions={actions} />)

  if (!useHover) {
    return action;
  }

  return (
    <Box className="action-hover actions-container">
      {action}
    </Box>
  );
}


const InfoItem: FC<InfoItemProps> = (props) => {
  const { row, data } = props;
  const {
    label,
    actions,
    renderAction: renderActionsProps,
    render: renderProps,
    auxiliaryText,
    renderRightContent,
    useHover = true
  } = row || {};

  const disabledEdit = useMemo(() => actions?.length < 1 && !renderActionsProps, [actions, renderActionsProps]);

  return (
    <InfoItemRoot>
      <Box sx={{ alignSelf: 'flex-start', mt: '18px' }}>
        <Typography variant="body2" color="secondary" weight="medium" width={165}>{label}</Typography>
      </Box>
      <Box flex={1} position="relative">
        <RightContent
          renderRightContent={renderRightContent}
          renderProps={renderProps}
          data={data}
          auxiliaryText={auxiliaryText}
          disabledEdit={disabledEdit}
        />
        {
          !disabledEdit && <HoverActions useHover={useHover} renderActionsProps={renderActionsProps} actions={actions} />
        }
      </Box>
    </InfoItemRoot>
  )
}

export default InfoItem;
