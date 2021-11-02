declare const _default: {
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
export default _default;
