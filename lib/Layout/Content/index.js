var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Box } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Menu from '../Menu';
export var componentName = 'AlayoutContent';
var ContentRoot = styled(Box, {
    name: 'AlayoutContent',
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        background: theme.palette.background.default,
    });
});
var PageRoot = styled(Box, {
    name: 'AlayoutPage',
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; },
})(function () { return ({}); });
var AlayoutContent = function (inProps) {
    var _a = useThemeProps({ props: inProps, name: componentName }), children = _a.children, menu = _a.menu, otherProps = __rest(_a, ["children", "menu"]);
    var MenuRender = function () {
        if (!menu)
            return null;
        return React.createElement(Menu, __assign({}, menu));
    };
    var ownerState = {
        flex: menu && !!menu.menus,
    };
    return (React.createElement(ContentRoot, __assign({ ownerState: ownerState }, otherProps),
        React.createElement(MenuRender, null),
        React.createElement(PageRoot, null, children)));
};
export default AlayoutContent;
