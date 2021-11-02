import * as React from 'react';
import { Paper } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import HoverMenu from './HoverMenu';
export var componentName = 'AlayoutMenu';
var MenuRoot = styled(Paper, {
    name: 'AlayoutMenu',
    slot: 'root',
    overridesResolver: function (_, styles) { return styles.root; },
})({
    width: 52,
});
var AlayoutMenu = function (inProps) {
    var menus = useThemeProps({ props: inProps, name: componentName }).menus;
    return (React.createElement(MenuRoot, null,
        React.createElement(HoverMenu, { menus: menus })));
};
export default AlayoutMenu;
