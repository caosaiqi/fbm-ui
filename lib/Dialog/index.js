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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { Dialog, Box, DialogActions, Button, Slide, IconButton } from '@material-ui/core';
import useThemeProps from '@material-ui/core/styles/useThemeProps';
import styled from '@material-ui/core/styles/styled';
import { CloseIcon } from '@avocadoui/icons';
import Atypography from '../Typography';
import Abox from '../Box';
export var componentName = 'ADialog';
var Content = styled(Abox)(function (_a) {
    var width = _a.width, isNullHeader = _a.isNullHeader, isNullFooter = _a.isNullFooter;
    return (__assign(__assign({ width: width || 360, padding: 16 }, (isNullHeader && {
        paddingTop: 0,
    })), (isNullFooter && {
        paddingBottom: 0,
    })));
});
var Header = function (props) {
    var title = props.title, isShowClose = props.isShowClose, header = props.header, onClose = props.onClose;
    if (header === null)
        return null;
    if (typeof (header) === 'function') {
        var CustomHeader = header;
        return React.createElement(CustomHeader, __assign({}, props));
    }
    if (!title && !isShowClose)
        return null;
    var HeaderRow = styled(Box)(__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center' }, (!title && {
        justifyContent: 'flex-end',
    })));
    var Title = function () {
        if (!title)
            return null;
        return (React.createElement("div", { style: { flex: 1 } },
            React.createElement(Atypography, { weight: 'medium' }, title)));
    };
    var CloseBtn = function () {
        if (!isShowClose)
            return null;
        return (React.createElement(IconButton, { onClick: function (e) { return onClose(e, 'backdropClick'); }, style: { padding: 0 } },
            React.createElement(CloseIcon, null)));
    };
    return (React.createElement(HeaderRow, null,
        React.createElement(Title, null),
        React.createElement(CloseBtn, null)));
};
var Footer = function (props) {
    var footer = props.footer, okText = props.okText, closeText = props.closeText, isShowCloseBtn = props.isShowCloseBtn, closeProps = props.closeProps, okProps = props.okProps, onClose = props.onClose, onOk = props.onOk;
    if (footer === null)
        return null;
    if (typeof (footer) === 'function') {
        var CustomFooter = footer;
        return React.createElement(CustomFooter, __assign({}, props));
    }
    var CloseButton = function () {
        if (!isShowCloseBtn)
            return null;
        return (React.createElement(Button, __assign({}, closeProps, { onClick: function (event) { return onClose(event, 'backdropClick'); } }), closeText));
    };
    return (React.createElement(DialogActions, { sx: { padding: 0 } },
        React.createElement(CloseButton, null),
        React.createElement(Button, __assign({}, okProps, { onClick: function (e) { return onOk(e); } }), okText)));
};
var AuiDialog = function (inProps) {
    var _a = useThemeProps({ props: inProps, name: componentName }), width = _a.width, title = _a.title, header = _a.header, isShowClose = _a.isShowClose, children = _a.children, footer = _a.footer, okText = _a.okText, closeText = _a.closeText, isShowCloseBtn = _a.isShowCloseBtn, closeProps = _a.closeProps, okProps = _a.okProps, onClose = _a.onClose, onOk = _a.onOk, otherProps = __rest(_a, ["width", "title", "header", "isShowClose", "children", "footer", "okText", "closeText", "isShowCloseBtn", "closeProps", "okProps", "onClose", "onOk"]);
    var doClose = function (event, reason) {
        if (onClose && typeof onClose === 'function') {
            onClose(event, reason);
        }
    };
    var doOk = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var f;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(onOk && typeof onOk === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, onOk(event)];
                case 1:
                    f = _a.sent();
                    if (f === undefined) {
                        doClose(event, 'backdropClick');
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var contentProps = {
        width: width,
        isNullHeader: header === null,
        isNullFooter: footer === null,
    };
    var HeaderProps = {
        title: title,
        header: header,
        isShowClose: isShowClose,
        onClose: doClose,
    };
    var footerProps = {
        footer: footer,
        okText: okText,
        closeText: closeText,
        isShowCloseBtn: isShowCloseBtn,
        closeProps: closeProps,
        okProps: okProps,
        onClose: doClose,
        onOk: doOk,
    };
    return (React.createElement(Dialog, __assign({ TransitionComponent: Slide }, otherProps),
        React.createElement(Content, __assign({}, contentProps),
            React.createElement(Header, __assign({}, HeaderProps)),
            children,
            React.createElement(Footer, __assign({}, footerProps)))));
};
AuiDialog.defaultProps = {
    isShowClose: true,
    isShowCloseBtn: true,
    closeText: '取消',
    okText: '好的',
    closeProps: {
        variant: 'text',
        color: 'secondary',
    },
    okProps: {
        variant: 'contained',
    },
};
export default AuiDialog;
