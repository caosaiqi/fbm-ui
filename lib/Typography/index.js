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
import { Typography } from '@material-ui/core';
var colorTransformations = {
    error: 'error.main',
    warning: 'warning.main',
    success: 'success.main',
    info: 'info.main',
    black: 'common.black',
    white: 'common.white',
    secondary: 'text.secondary',
    primary: 'text.primary',
    disabled: 'text.disabled',
};
var transformDeprecatedColors = function (color) { return colorTransformations[color] || color; };
var weightTransformations = {
    light: 'fontWeightLight',
    regular: 'fontWeightRegular',
    medium: 'fontWeightMedium',
    bold: 'fontWeightBold',
};
var transformDeprecatedWeight = function (weight) { return weightTransformations[weight] || weight; };
var AuiTypography = function (_a) {
    var children = _a.children, color = _a.color, weight = _a.weight, props = __rest(_a, ["children", "color", "weight"]);
    var textColor = transformDeprecatedColors(color);
    var textWeight = transformDeprecatedWeight(weight);
    return (React.createElement(Typography, __assign({ color: textColor, fontWeight: textWeight }, props), children));
};
export default AuiTypography;
