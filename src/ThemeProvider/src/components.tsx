
import { outlinedInputClasses } from '@material-ui/core'
import customComponets from './customComponets'
import palette from './palette'

console.log(outlinedInputClasses.notchedOutline)

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

  MuiInputBase: {
    styleOverrides: {
      // sizeSmall: {
      //   fontSize: 14,
      // },
      // inputSizeSmall: {
      //   padding: '5.5px 11px !important',
      // },
      // input: {
      //   padding: '10.5px 11px !important',
      // },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        lineHeight: 1,
      },
      sizeSmall: {
        fontSize: 14,
        lineHeight: '1.2em',
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
          borderColor: palette.action.disabled,
          backgroundColor: palette.action.disabledBackground,
        },
      },

      input: {
        font: '16px PingFangSC-Regular, PingFang SC',
        height: 46,
        padding: '0 11px',
      },
      sizeSmall: {
        height: 32,
        padding: '0 11px',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        fontSize: '14px',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'rgba(76,175,80,0.8)',
        },
      },
      sizeSmall: {
        padding: '0px 8px',
      },
      sizeMedium: {
        padding: '4px 16px',
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

  ...customComponets,
}