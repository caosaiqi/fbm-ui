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
import Dialog from '../Dialog';
import renderIntoBody from '../utils/renderIntoBody';
import ThemeProvider from '../ThemeProvider';
import Typography from '../Typography';
export var componentName = 'Confirm';
var confirm = function (props) {
    var content = props.content, onClose = props.onClose, _a = props.open, defaultOpen = _a === void 0 ? true : _a;
    var Content = function () {
        var renderContent = null;
        if (!content)
            return renderContent;
        if (typeof content === 'string') {
            renderContent = (React.createElement(Typography, { color: 'secondary' }, content));
        }
        else {
            renderContent = content;
        }
        return (React.createElement(Box, { m: '24px 0' }, renderContent));
    };
    var confirmDiv;
    var Modal = function () {
        var _a = React.useState(defaultOpen), open = _a[0], setOpen = _a[1];
        var doClose = function (event) {
            setOpen(false);
            if (onClose && typeof onClose === 'function') {
                onClose(event, 'backdropClick');
            }
            confirmDiv.delete();
        };
        return (React.createElement(ThemeProvider, { theme: undefined },
            React.createElement(Dialog, __assign({}, props, { open: open, onClose: doClose }),
                React.createElement(Content, null))));
    };
    confirmDiv = renderIntoBody(React.createElement(Modal, null));
};
confirm.defaultProps = {
    BackdropProps: {
        open: false,
    },
};
export default confirm;
