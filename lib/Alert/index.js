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
import { Alert } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Aicon from '../Icon';
var componentName = 'Aalert';
var AlertRoot = styled(Alert, {
    name: 'Aalert',
    slot: 'Root',
    overridesResolver: function (props, styles) {
        var type = props.type;
        return [styles.root, styles[type]];
    },
})(function () { return ({}); });
var Aalert = function (inProps) {
    var _a = useThemeProps({ props: inProps, name: componentName }), type = _a.type, children = _a.children, message = _a.message, icon = _a.icon, componentColor = _a.color, otherProps = __rest(_a, ["type", "children", "message", "icon", "color"]);
    var Icon = function () {
        if (icon === null)
            return null;
        if (icon === undefined) {
            var typeIcons = {
                success: 'CheckIcon',
                error: 'ErrorIcon',
                warning: 'WarningIcon',
                info: 'InfoIcon',
            };
            if (typeIcons[type]) {
                var name_1 = typeIcons[type];
                return React.createElement(Aicon, { name: name_1 });
            }
        }
        if (typeof icon === 'string') {
            return React.createElement(Aicon, { name: icon });
        }
    };
    var color = componentColor || type;
    return (React.createElement(AlertRoot, __assign({ color: color, icon: React.createElement(Icon, null), type: type }, otherProps), message || children));
};
export default Aalert;
