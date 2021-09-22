import * as React from 'react';

export interface HeaderPrpos {
    // children: React.ReactNode,
}

const Header: React.FC<HeaderPrpos> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Header
