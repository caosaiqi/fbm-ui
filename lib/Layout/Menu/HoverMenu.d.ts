import * as React from 'react';
interface MenuItemProps {
    selected?: boolean;
    title?: string;
    icon?: React.ReactNode;
    link?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
export interface HoverMenuProps {
    menus?: MenuItemProps[];
}
declare const HoverMenu: React.FC<HoverMenuProps>;
export default HoverMenu;
