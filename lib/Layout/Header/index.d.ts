import * as React from 'react';
import { AlogoProps } from '../../Logo';
export interface HeaderPrpos {
    children?: React.ReactNode;
    logo?: AlogoProps;
}
declare const Header: React.FC<HeaderPrpos>;
export default Header;
