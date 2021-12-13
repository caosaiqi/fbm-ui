
import React from 'react'
import { outlinedInputClasses } from '@mui/material'
import palette from './palette'
import {IndeterminateCheckBoxIcon, CheckBoxOutlineBlankIcon, CheckBoxIcon} from '../../icons'

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

  MuiInputLabel: {
    styleOverrides: {
      root: {
        top: '-2px',
        left: '-2px',
        [`&.${outlinedInputClasses.focused}`]: {
          top: '-2px',
          left: '-2px',
        },
      },

      sizeSmall: {
        top: '-1px',
        fontSize: 14,
        [`&.${outlinedInputClasses.focused}`]: {
          top: '-1px',
        },
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'rgba(0,0,0,0.08)',
        },
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'rgba(0,0,0,0.26)',
        },
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: palette.primary.main,
          borderWidth: 1,
        },
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: palette.error.main,
        },
        [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
          // borderColor: palette.action.disabled,
          borderColor: 'rgba(225,225,225,1)',
          backgroundColor: palette.action.disabledBackground,
        },
      },
      // input: {
      //   fontSize: 16,
      //   height: 48,
      //   padding: '0 12px',
      // },
      // inputSizeSmall: {
      //   height: 36,
      //   fontSize: 14,
      // },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        fontSize: '14px',
        lineHeight: '22px',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: 'rgba(76,175,80,0.8)',
        },
      },
      containedError: {
        '&:hover': {
          backgroundColor: 'rgba(255,108,108,0.8)',
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
  },

  MuiIconButton: {
    styleOverrides: {
      sizeMedium: {
        padding: '6px',
        '& .MuiSvgIcon-root': {
          fontSize: '24px'
        }
      },
      sizeSmall: {
        padding: '6px',
        '& .MuiSvgIcon-root': {
          fontSize: '18px'
        }
      }
    }
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(0,0,0,0)'
      }
    },
  },

  MuiPopover: {
    styleOverrides: {
      paper: {
        padding: '4px 0',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
      }
    },
  },

  LayoutHoverMenu: {
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

  MuiListSubheader: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        color: 'rgba(0,0,0,0.56)',
        backgroundColor: '#f5f5f5',
        height: '24px',
        lineHeight: '24px',
      },
      sticky: {
        backgroundColor: '#f5f5f5',
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: 'rgba(0, 0, 0, 0.26)',
        padding: 12,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        },
      },
    },
    defaultProps: {
      indeterminateIcon: <IndeterminateCheckBoxIcon />,
      checkedIcon: <CheckBoxOutlineBlankIcon />,
      icon: <CheckBoxIcon />,
    }
  },

  MuiPaginationItem: {
    styleOverrides: {
      root: {
        color: 'rgba(0, 0, 0, 0.86)',

        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: palette.primary.main,
        }
      },
    }
  }
}