declare const _default: {
    components: {
        Aavatar: {
            styleOverrides: {
                small: {
                    width: number;
                    height: number;
                };
                middle: {
                    width: number;
                    height: number;
                };
                large: {
                    width: number;
                    height: number;
                };
                disabled: {
                    opacity: number;
                };
            };
            defaultProps: {
                size: string;
                disabled: boolean;
            };
        };
        ListRow: {
            defaultProps: {
                disablePadding: boolean;
                button: boolean;
                component: string;
            };
        };
        Toast: {
            styleOverrides: {
                root: {
                    bgcolor: string;
                    display: string;
                    alignItems: string;
                    padding: string;
                    minWidth: number;
                    boxShadow: string;
                    borderRadius: string;
                };
                error: {
                    '& .MuiSvgIcon-root': {
                        color: string;
                    };
                };
                warning: {
                    '& .MuiSvgIcon-root': {
                        color: string;
                    };
                };
                success: {
                    '& .MuiSvgIcon-root': {
                        color: string;
                    };
                };
                info: {
                    '& .MuiSvgIcon-root': {
                        color: string;
                    };
                };
            };
        };
        ADialog: {
            defaultProps: {
                isShowClose: boolean;
                isShowCloseBtn: boolean;
                closeText: string;
                okText: string;
                closeProps: {
                    variant: string;
                    color: string;
                };
                okProps: {
                    variant: string;
                };
            };
        };
        ADialogOkButton: {
            styleOverrides: {
                root: {
                    padding: number;
                    minWidth: number;
                };
            };
        };
        Aalert: {
            styleOverrides: {
                root: {
                    color: string;
                    padding: string;
                    border: string;
                };
                success: {
                    borderColor: string;
                    backgroundColor: string;
                };
                error: {
                    borderColor: string;
                    backgroundColor: string;
                };
                warning: {
                    borderColor: string;
                    backgroundColor: string;
                };
                info: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            defaultProps: {
                type: string;
            };
        };
        Aheader: {
            styleOverrides: {
                root: {
                    display: string;
                    alignItems: string;
                    height: number;
                    backgroundColor: string;
                };
            };
        };
        Alogo: {
            styleOverrides: {
                root: {
                    display: string;
                    alignItems: string;
                };
            };
            defaultProps: {
                logo: string;
                describe: string;
                width: number;
                height: number;
            };
        };
        Amask: {
            styleOverrides: {
                root: {
                    position: string;
                    top: number;
                    right: number;
                    bottom: number;
                    left: number;
                    zIndex: number;
                };
            };
        };
        Aloading: {
            defaultProps: {
                color: string;
                size: string;
            };
        };
        AlayoutContent: {
            styleOverrides: {
                root: {
                    display: string;
                    height: string;
                };
            };
        };
        AlayoutPage: {
            styleOverrides: {
                root: {
                    flex: number;
                    overflowY: string;
                    boxSizing: string;
                };
            };
        };
        AlayoutHoverMenu: {
            styleOverrides: {
                root: {
                    width: number;
                    zIndex: number;
                    overflowX: string;
                    height: string;
                    boxShadow: string;
                    backgroundColor: string;
                    position: string;
                    '&:hover': {
                        width: number;
                    };
                };
            };
        };
        Ainput: {};
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    lineHeight: string;
                    backgroundColor: string;
                    fontWeight: number;
                };
                arrow: {
                    color: string;
                };
            };
            defaultProps: {
                arrow: boolean;
            };
        };
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    [x: string]: string | {
                        top: string;
                        left: string;
                    };
                    top: string;
                    left: string;
                };
                sizeSmall: {
                    [x: string]: string | number | {
                        top: string;
                    };
                    top: string;
                    fontSize: number;
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    [x: string]: {
                        borderColor: string;
                        borderWidth?: undefined;
                        backgroundColor?: undefined;
                    } | {
                        borderColor: "#4caf50";
                        borderWidth: number;
                        backgroundColor?: undefined;
                    } | {
                        borderColor: string;
                        backgroundColor: string;
                        borderWidth?: undefined;
                    };
                };
                input: {
                    fontSize: number;
                    height: number;
                    padding: string;
                };
                inputSizeSmall: {
                    height: number;
                    fontSize: number;
                };
            };
        };
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: string;
                    fontSize: string;
                    lineHeight: string;
                    '&:hover': {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                };
                sizeSmall: {
                    padding: string;
                };
                sizeMedium: {
                    padding: string;
                };
                sizeLarge: {
                    padding: string;
                };
                outlined: {
                    borderColor: string;
                    color: string;
                    '&:hover': {
                        background: string;
                        borderColor: string;
                    };
                };
                text: {
                    color: string;
                    '&:hover': {
                        background: string;
                    };
                };
                startIcon: {};
            };
        };
    };
    palette: {
        common: {
            black: string;
            white: string;
        };
        type: string;
        primary: {
            light: "#81c784";
            main: "#4caf50";
            dark: "#43a047";
            contrastText: string;
        };
        secondary: {
            light: "#e57373";
            main: string;
            dark: "#d32f2f";
            contrastText: string;
        };
        error: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        warning: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        success: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        info: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        grey: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        contrastThreshold: number;
        tonalOffset: number;
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            hint: string;
            link: string;
        };
        divider: string;
        background: {
            paper: string;
            default: string;
        };
        action: {
            active: string;
            hover: string;
            hoverOpacity: number;
            selected: string;
            selectedOpacity: number;
            disabled: string;
            disabledBackground: string;
            disabledOpacity: number;
            focus: string;
            focusOpacity: number;
            activatedOpacity: number;
        };
        mask: {
            dark: string;
            white: string;
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        h4: {
            fontSize: string;
            lineHeight: string;
        };
        h5: {
            fontSize: string;
            lineHeight: string;
        };
        h6: {
            fontSize: string;
            lineHeight: string;
        };
        body1: {
            fontSize: string;
            lineHeight: string;
        };
        body2: {
            fontSize: string;
            lineHeight: string;
        };
        caption: {
            fontSize: string;
            lineHeight: string;
        };
        subtitle1: {
            fontSize: string;
            lineHeight: string;
            fontWeight: number;
        };
    };
    transitions: {
        easing: {
            easeInOut: string;
            easeOut: string;
            easeIn: string;
            sharp: string;
        };
        duration: {
            shortest: number;
            shorter: number;
            short: number;
            standard: number;
            complex: number;
            enteringScreen: number;
            leavingScreen: number;
        };
    };
};
export default _default;
