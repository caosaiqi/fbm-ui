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
import Typography from '../Typography';
import getStyleOverrides from '../utils/getStyleOverrides';
import renderIntoBody from '../utils/renderIntoBody';
export var componentName = 'Toast';
var icons = {
    'error': ErrorIcon,
    'warning': WarningIcon,
    'success': CheckIcon,
    'info': InfoIcon,
};
var Notice = function (props) {
    var autoHideDuration = props.autoHideDuration, type = props.type, message = props.message, onClose = props.onClose, defaultOpen = props.open;
    var _a = React.useState(defaultOpen), open = _a[0], setOpen = _a[1];
    var overrides = getStyleOverrides(componentName);
    var t = setTimeout(function () {
        setOpen(false);
        if (onClose && typeof onClose === 'function') {
            onClose();
        }
        clearTimeout(t);
    }, autoHideDuration);
    var Icon = icons[type];
    var style = __assign(__assign({}, overrides.root), overrides[type]);
    return (React.createElement(Snackbar, __assign({}, props, { open: open }),
        React.createElement(Box, { sx: style },
            React.createElement(Icon, null),
            React.createElement(Typography, { fontSize: 14, ml: '14px' }, message))));
};
Notice.defaultProps = {
    open: true,
    type: 'info',
    TransitionComponent: Slide,
    autoHideDuration: 3000,
    direction: 'down',
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
    },
};
var createNotice = function (_a) {
    var message = _a.message, onClose = _a.onClose, type = _a.type;
    var div;
    var doClose = function () {
        if (onClose && typeof onClose === 'function') {
            onClose();
        }
        div.delete(300);
    };
    div = renderIntoBody(React.createElement(Notice, { message: message, type: type, onClose: doClose }));
};
var AuiToast = {
    error: function (message, onClose) {
        createNotice({
            message: message,
            onClose: onClose,
            type: 'error',
        });
    },
    warning: function (message, onClose) {
        createNotice({
            message: message,
            onClose: onClose,
            type: 'warning',
        });
    },
    success: function (message, onClose) {
        createNotice({
            message: message,
            onClose: onClose,
            type: 'success',
        });
    },
    info: function (message, onClose) {
        createNotice({
            message: message,
            onClose: onClose,
            type: 'info',
        });
    },
};
export default AuiToast;
