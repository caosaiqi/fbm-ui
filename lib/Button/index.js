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
import { Button } from '@material-ui/core';
import Aloading from '../Loading';
export var componentName = 'Ainput';
var Abutton = function (props) {
    var loading = props.loading, children = props.children, buttonProps = __rest(props, ["loading", "children"]);
    if (loading) {
        buttonProps.disabled = true;
    }
    var loadingProps = {
        isMask: false,
        size: 16,
    };
    var LoadingRender = function () { return loading ? React.createElement(Aloading, __assign({}, loadingProps)) : null; };
    return (React.createElement(Button, __assign({}, buttonProps),
        children,
        React.createElement(LoadingRender, null)));
};
Abutton.defaultProps = {
    variant: 'contained',
    loading: false,
};
export default Abutton;
