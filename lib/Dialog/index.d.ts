import * as React from 'react';
import { DialogProps, ButtonProps, ModalProps } from '@material-ui/core';
export declare const componentName: string;
interface HeaderProps {
    /** 标题 */
    title?: string;
    /** 是否显示dialog又上角“x” */
    isShowClose?: boolean;
    /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
    header?: React.ReactElement;
    /** 关闭弹框事件 */
    onClose?: ModalProps['onClose'];
}
export interface FooterProps {
    /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
    footer?: React.ReactElement;
    /** footer 确认按钮文案 默认为“好的”' */
    okText?: string;
    /** footer 取消按钮文案 默认为“取消”' */
    closeText?: string;
    /** 是否显示取消按钮 */
    isShowCloseBtn?: boolean;
    /** footer 取消按钮props */
    okProps?: ButtonProps;
    /** footer 取消按钮props */
    closeProps?: ButtonProps;
    onOk?: (event: any) => void | Promise<void>;
    /** 关闭弹框事件 */
    onClose?: ModalProps['onClose'];
}
export interface ContentProps {
    /** 弹框宽度 */
    width?: number;
    /** 是否显示header */
    isNullHeader: boolean;
    /** 是否显示footer */
    isNullFooter: boolean;
}
export interface AdialogProps extends DialogProps, HeaderProps, FooterProps {
    /** 弹框宽度 */
    width?: number;
}
declare const AuiDialog: React.FC<AdialogProps>;
export default AuiDialog;
