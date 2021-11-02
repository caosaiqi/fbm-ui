import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Image from '../Image';
export var componentName = 'Alogo';
var AlogoRoot = styled(Box, {
    name: 'Alogo',
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; },
})(function () { return ({}); });
var Alogo = function (inProps) {
    var _a = useThemeProps({ props: inProps, name: componentName }), logo = _a.logo, describe = _a.describe, height = _a.height, width = _a.width;
    return (React.createElement(AlogoRoot, null,
        React.createElement(Image, { src: logo, width: width, height: height }),
        React.createElement(Typography, { className: "describe" }, describe)));
};
export default Alogo;
