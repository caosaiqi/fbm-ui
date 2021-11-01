export declare const componentName: string;
interface ToastItem {
    (message?: string, onClose?: () => void): void;
}
export interface ToastPropos {
    error: ToastItem;
    warning: ToastItem;
    success: ToastItem;
    info: ToastItem;
}
declare const AuiToast: ToastPropos;
export default AuiToast;
