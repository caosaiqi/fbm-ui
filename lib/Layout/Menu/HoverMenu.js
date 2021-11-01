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
import { List, ListItemButton, ListItemText, ListItemIcon } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
var MenuRoot = styled(List, {
    slot: 'root',
    name: 'AlayoutHoverMenu',
    overridesResolver: function (_, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        padding: 0,
        margin: 0,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    });
});
var MenuItemRoot = styled(ListItemButton)(function (_a) {
    var selected = _a.selected;
    return (__assign({}, (selected && {
        background: 'linear-gradient(90deg,#71D376 0%,#4BB051 100%)',
        '& .MuiListItemIcon-root': {
            color: '#fff',
        },
        '& .MuiListItemText-root': {
            color: '#fff',
        },
    })));
});
var MenuItemIcon = styled(ListItemIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.text.secondary,
    });
});
var MenuItemText = styled(ListItemText)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
    });
});
var MenuItem = function (_a) {
    var title = _a.title, icon = _a.icon, otheProps = __rest(_a, ["title", "icon"]);
    return (React.createElement(MenuItemRoot, __assign({ className: 'MenuItemRoot' }, otheProps),
        React.createElement(MenuItemIcon, null, icon),
        React.createElement(MenuItemText, null, title)));
};
var HoverMenu = function (props) {
    var menus = props.menus;
    if (!menus)
        return null;
    var menuItems = menus.map(function (menu) { return React.createElement(MenuItem, __assign({ key: menu.title }, menu)); });
    return (React.createElement(MenuRoot, { className: 'MenuRoot' }, menuItems));
};
export default HoverMenu;
