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
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
var componentName = 'AlistRow';
var AuiAvatar = function (inProps) {
    var props = useThemeProps({ props: inProps, name: componentName });
    var before = props.before, text = props.text, after = props.after, otherProps = __rest(props, ["before", "text", "after"]);
    var Before = function () {
        if (!before)
            return null;
        return React.createElement(ListItemIcon, null,
            " ",
            before,
            " ");
    };
    var Text = function () {
        if (!text)
            return null;
        var textArr = text;
        if (typeof text === 'string') {
            textArr = [text];
        }
        var primary = textArr[0], secondary = textArr[1];
        return (React.createElement(ListItemText, { primary: primary, secondary: secondary }));
    };
    return (React.createElement(ListItem, __assign({ secondaryAction: after }, otherProps),
        React.createElement(Before, { key: 'icon' }),
        React.createElement(Text, { key: 'text' })));
};
export default AuiAvatar;
