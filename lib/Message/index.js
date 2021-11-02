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
import { CheckIcon, ErrorIcon, WarningIcon, InfoIcon } from '@avocadoui/icons';
import { Snackbar, Box, Slide } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import Typography from '../Typography';
import renderIntoBody from '../utils/renderIntoBody';
import { theme } from '../ThemeProvider';
export var componentName = 'Amessage';
var icons = {
    'error': ErrorIcon,
    'warning': WarningIcon,
    'success': CheckIcon,
    'info': InfoIcon,
};
var Message = function (props) {
    var autoHideDuration = props.autoHideDuration, type = props.type, message = props.message, onClose = props.onClose, defaultOpen = props.open;
    var _a = React.useState(defaultOpen), open = _a[0], setOpen = _a[1];
    var t = setTimeout(function () {
        setOpen(false);
        if (onClose && typeof onClose === 'function') {
            onClose();
        }
        clearTimeout(t);
    }, autoHideDuration);
    var Row = styled(Box)({
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        minWidth: 156,
        boxShadow: ' 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
    });
    var Icon = styled(icons[type])({
        color: theme.palette[type].main,
    });
    var Content = styled(Typography)({
        fontSize: 14,
        marginLeft: '14px',
    });
    return (React.createElement(Snackbar, __assign({}, props, { open: open }),
        React.createElement(Row, null,
            React.createElement(Icon, null),
            React.createElement(Content, null, message))));
};
Message.defaultProps = {
    open: true,
    type: 'info',
    TransitionComponent: Slide,
    autoHideDuration: 40000,
    direction: 'down',
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
    },
};
var createMessage = function (_a) {
    var message = _a.message, onClose = _a.onClose, type = _a.type;
    var div;
    var doClose = function () {
        if (onClose && typeof onClose === 'function') {
            onClose();
        }
        div.delete(300);
    };
    div = renderIntoBody(React.createElement(Message, { message: message, type: type, onClose: doClose }));
};
var messages = {
    error: function (message, onClose) {
        createMessage({
            message: message,
            onClose: onClose,
            type: 'error',
        });
    },
    warning: function (message, onClose) {
        createMessage({
            message: message,
            onClose: onClose,
            type: 'warning',
        });
    },
    success: function (message, onClose) {
        createMessage({
            message: message,
            onClose: onClose,
            type: 'success',
        });
    },
    info: function (message, onClose) {
        createMessage({
            message: message,
            onClose: onClose,
            type: 'info',
        });
    },
};
export default messages;
