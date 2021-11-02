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
import Loading from '../Loading';
import Mask from '../Mask';
export var componentName = 'Abox';
var BoxRoot = styled(Box)({
    position: 'relative',
    boxSizing: 'border-box',
});
var DisabledMaskRender = function (_a) {
    var disabled = _a.disabled;
    return disabled ? React.createElement(Mask, null) : null;
};
var LoadingRender = function (_a) {
    var loading = _a.loading, size = _a.size, desc = _a.desc;
    if (!loading)
        return null;
    return (React.createElement(Loading, { desc: desc, size: size }));
};
var Abox = function (_a) {
    var loading = _a.loading, disabled = _a.disabled, children = _a.children, otherProps = __rest(_a, ["loading", "disabled", "children"]);
    var loadingProps = __assign({}, ((typeof (loading) === 'boolean')
        ? { loading: loading }
        : loading));
    return (React.createElement(BoxRoot, __assign({}, otherProps),
        React.createElement(LoadingRender, __assign({}, loadingProps)),
        React.createElement(DisabledMaskRender, { disabled: disabled }),
        children));
};
export default Abox;
