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
import { Avatar } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Box from '../Box';
export var componentName = 'Aavatar';
var BoxRoot = styled(Box)({
    display: 'inline-block',
    borderRadius: '50%',
});
var AvatarRoot = styled(Avatar, {
    name: 'Aavatar',
    slot: 'Root',
    overridesResolver: function (_a, styles) {
        var size = _a.size;
        return [
            styles.root,
            styles[size],
        ];
    },
})(function (_a) {
    var size = _a.size;
    return (__assign({}, (size && typeof size === 'number') && {
        width: size,
        height: size,
    }));
});
var Aavatar = function (inProps) {
    var _a = useThemeProps({ props: inProps, name: componentName }), size = _a.size, disabled = _a.disabled, otherProps = __rest(_a, ["size", "disabled"]);
    return (React.createElement(BoxRoot, { disabled: disabled },
        React.createElement(AvatarRoot, __assign({ size: size }, otherProps))));
};
Aavatar.defaultProps = {
    size: 'middle',
    disabled: false,
};
export default Aavatar;
