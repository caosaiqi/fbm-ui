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
var _a, _b, _c;
import { outlinedInputClasses } from '@material-ui/core';
import customComponets from './customComponets';
import palette from './palette';
export default __assign({ MuiTooltip: {
        styleOverrides: {
            tooltip: {
                lineHeight: '1.2rem',
                backgroundColor: 'rgba(0,0,0,0.8)',
                fontWeight: 400,
            },
            arrow: {
                color: 'rgba(0,0,0,0.8)',
            },
        },
        defaultProps: {
            arrow: true,
        },
    }, MuiInputLabel: {
        styleOverrides: {
            root: (_a = {
                    top: '-2px',
                    left: '-2px'
                },
                _a["&." + outlinedInputClasses.focused] = {
                    top: '0',
                    left: '0',
                },
                _a),
            sizeSmall: (_b = {
                    top: '-1px',
                    fontSize: 14
                },
                _b["&." + outlinedInputClasses.focused] = {
                    top: '1px',
                },
                _b),
        },
    }, MuiOutlinedInput: {
        styleOverrides: {
            root: (_c = {},
                _c["& ." + outlinedInputClasses.notchedOutline] = {
                    borderColor: 'rgba(0,0,0,0.08)',
                },
                _c["&:hover ." + outlinedInputClasses.notchedOutline] = {
                    borderColor: 'rgba(0,0,0,0.26)',
                },
                _c["&." + outlinedInputClasses.focused + " ." + outlinedInputClasses.notchedOutline] = {
                    borderColor: palette.primary.main,
                    borderWidth: 1,
                },
                _c["&." + outlinedInputClasses.error + " ." + outlinedInputClasses.notchedOutline] = {
                    borderColor: palette.error.main,
                },
                _c["&." + outlinedInputClasses.disabled + " ." + outlinedInputClasses.notchedOutline] = {
                    // borderColor: palette.action.disabled,
                    borderColor: 'rgba(225,225,225,1)',
                    backgroundColor: palette.action.disabledBackground,
                },
                _c),
            input: {
                fontSize: 16,
                height: 48,
                padding: '0 12px',
            },
            inputSizeSmall: {
                height: 36,
                fontSize: 14,
            },
        },
    }, MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                fontSize: '14px',
                lineHeight: '22px',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: 'rgba(76,175,80,0.8)',
                },
            },
            sizeSmall: {
                padding: '1px 9px',
            },
            sizeMedium: {
                padding: '5px 16px',
            },
            sizeLarge: {
                padding: '9px 24px',
            },
            outlined: {
                borderColor: 'rgba(0,0,0,.12)',
                color: palette.text.primary,
                '&:hover': {
                    background: palette.action.hover,
                    borderColor: 'rgba(0,0,0,.04)',
                },
            },
            text: {
                color: palette.text.secondary,
                '&:hover': {
                    background: 'rgba(0,0,0,.04)',
                },
            },
            startIcon: {
            // marginRight: '3px',
            },
        },
    } }, customComponets);
