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
import { CircularProgress } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import Mask from '../Mask';
import Typography from '../Typography';
export var componentName = 'Aloading';
var MaskRoot = styled(Mask)(function (_a) {
    var theme = _a.theme, isMask = _a.isMask;
    var white = theme.palette.mask.white;
    return __assign(__assign({}, (isMask && {
        backgroundColor: white,
    })), { display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' });
});
MaskRoot.defaultProps = {
    isMask: true,
};
var LoadingRoot = styled(CircularProgress, {
    name: 'Aloading',
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; },
})(function () { return ({}); });
var LoadingTextRender = function (_a) {
    var desc = _a.desc;
    if (!desc)
        return null;
    if (typeof desc === 'string') {
        return (React.createElement(Typography, { variant: 'overline', display: 'block', weight: 'regular' }, desc));
    }
    return React.createElement("span", null, desc);
};
var ACircularProgress = function (props) {
    var isMask = props.isMask, desc = props.desc, loadingProps = __rest(props, ["isMask", "desc"]);
    return (React.createElement(MaskRoot, { isMask: isMask },
        React.createElement(LoadingRoot, __assign({}, loadingProps)),
        React.createElement(LoadingTextRender, { desc: desc })));
};
ACircularProgress.defaultProps = {
    color: 'primary',
    size: 44,
};
export default ACircularProgress;
