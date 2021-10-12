const customComponets = {
  /** 
   * src/avatar/
   * example/vite-project/src/pages/avatar
   */
  Aavatar: {
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
      root: {
        padding: 16,
        minWidth: 360,
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

  Aalert: {
    styleOverrides: {
      root: {
        color: 'rgba(0, 0, 0, 0.56)',
        padding: '4px 16px',
        border: '1px solid',
      },
      success: {
        borderColor: '#00d99d',
        backgroundColor: 'rgba(0, 217, 157, 0.26)',
      },
      error: {
        borderColor: '#ff6c6c',
        backgroundColor: 'rgba(255, 108, 108, 0.26)',
      },
      warning: {
        borderColor: '#F5C441',
        backgroundColor: 'rgba(245, 196, 65, 0.26)',
      },
      info: {
        borderColor: '#7c9df7',
        backgroundColor: ' rgba(61, 160, 245, 0.26)',
      },
    },
    defaultProps: {
      type: 'info',
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

  Amask: {
    styleOverrides: {
      root: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.56)',
      },
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
        padding: '20px',
      },
    },
  },
}


export default customComponets