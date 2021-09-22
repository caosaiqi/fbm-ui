import * as React from 'react';

export interface ContentPrpos {
    // children: React.ReactNode,
}

const Content: React.FC<ContentPrpos> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Content
