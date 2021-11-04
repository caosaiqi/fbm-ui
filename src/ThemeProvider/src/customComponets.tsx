const customComponets = {
 
  ListRow: {
    defaultProps: {
      disablePadding: true,
      button: false,
      component: 'li',
    },
  },

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
    },
  },

  ADialogOkButton: {
    styleOverrides: {
      root: {
        padding: 16,
        minWidth: 360,
      },
    },
  },

  Aheader: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
        height: 64,
        backgroundColor: '#fff',
      },
    },
  },

  Alogo: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
      },
    },

    defaultProps: {
      logo: 'http://public-static-assets.oss-cn-beijing.aliyuncs.com/img/hr_logo.png',
      describe: '方便面面试',
      width: 32,
      height: 32,
    },
  },

  Aloading: {
    defaultProps: {
      color: 'primary',
      size: 'large',
    },
  },

  AlayoutContent: {
    styleOverrides: {
      root: {
        display: 'flex',
        height: 'calc(100vh - 64px)',

      },
    },
  },

  AlayoutPage: {
    styleOverrides: {
      root: {
        flex: 1,
        overflowY: 'auto',
        boxSizing: 'border-box',
      },
    },
  },

  AlayoutHoverMenu: {
    styleOverrides: {
      root: {
        width: 56,
        zIndex: 1001,
        overflowX: 'hidden',
        height: '100%',
        boxShadow: '0px 4px 8px 0px rgb(0, 0, 0, 0.16)',
        backgroundColor: '#fff',
        position: 'absolute',
        '&:hover': {
          width: 186,
        },
      },
    },
  },


  Ainput: {
    
  },
}


export default customComponets