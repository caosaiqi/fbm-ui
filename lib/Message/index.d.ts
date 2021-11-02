export declare const componentName: string;
interface ItemProps {
    (message?: string, onClose?: () => void): void;
}
export interface Messages {
    error: ItemProps;
    warning: ItemProps;
    success: ItemProps;
    info: ItemProps;
}
declare const messages: Messages;
export default messages;
