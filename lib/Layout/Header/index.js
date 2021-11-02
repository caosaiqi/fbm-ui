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
import * as React from 'react';
import { Box } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import Logo from '../../Logo';
var HeaderRoot = styled(Box, {
    name: 'Aheader',
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; },
})(function () { return ({}); });
var Header = function (_a) {
    var children = _a.children, logo = _a.logo;
    var LogoRender = function () {
        if (logo === null)
            return null;
        return React.createElement(Logo, __assign({}, logo));
    };
    return (React.createElement(HeaderRoot, null,
        React.createElement(LogoRender, null),
        children));
};
export default Header;
