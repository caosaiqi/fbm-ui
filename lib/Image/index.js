import * as React from 'react';
import { Box } from '@material-ui/core';
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width;
    return (React.createElement(Box, { width: width, component: "img", src: src, alt: alt }));
};
export default Image;
