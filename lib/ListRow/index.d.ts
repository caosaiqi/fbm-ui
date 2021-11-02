import * as React from 'react';
import { ListItemProps } from '@material-ui/core';
export interface ListRowPropos extends ListItemProps {
    text?: string | string[];
    before?: React.ReactNode;
    children?: React.ReactNode;
    after?: React.ReactNode;
}
declare const AuiAvatar: React.FC<ListRowPropos>;
export default AuiAvatar;
