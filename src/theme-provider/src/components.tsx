
const customComponets = {
  /** 
   * src/avatar/
   * example/vite-project/src/pages/avatar
   */
  Avatar: {
    styleOverrides: {
      small: {
        width: 24,
        height: 24,
      },
      middle: {
        width: 36,
        height: 36,
      },
      large: {
        width: 48,
        height: 48,
      },
      disabled: {
        opacity: .8,
      },
    },
    defaultProps: {
      size: 'middle',
      disabled: false,
    },
  },

  /** 
   * src/list-row/
   * example/vite-project/src/pages/menu
   */
  ListRow: {
    defaultProps: {
      disablePadding: true,
      button: false,
      component: 'li',
    },
  },

  /** 
  * src/list-row/
  * example/vite-project/src/pages/menu
  */
  Toast: {
    styleOverrides: {
      root: {
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        minWidth: 156,
        boxShadow: ' 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
      },
      error: {
        '& .MuiSvgIcon-root': {
          color: 'error.main',
        },
      },
      warning: {
        '& .MuiSvgIcon-root': {
          color: 'warning.main',
        },
      },
      success: {
        '& .MuiSvgIcon-root': {
          color: 'success.main',
        },
      },
      info: {
        '& .MuiSvgIcon-root': {
          color: 'info.main',
        },
      },
    },
  },


  ADialog: {
    defaultProps: {
      isShowCloseButton: true,
      closeText: '取 消',
      okText: '好 的',
      isShowClose: true,
      closeButtonProps: {
        variant: 'text',
        color: 'secondary',
      },
      okButtonProps: { 
        variant: 'contained',
      },
    },
  },

  DialogContent: {
    styleOverrides: {
      root:{
        padding: 16,
        minWidth: 360,
      },
    },
  },

  ADialogOkButton: {

  },
}


export default {
  MuiTooltip: {
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
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 36,
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: {
        minWidth: 300,
      },
    },
  },
  ...customComponets,
}