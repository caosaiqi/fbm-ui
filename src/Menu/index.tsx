import * as React from 'react';

export interface MenuPrpos {
    // children: React.ReactNode,
}

const Menu: React.FC<MenuPrpos> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Menu
