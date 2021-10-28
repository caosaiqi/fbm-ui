
import customComponets from './customComponets'
import palette from './palette'

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
      sizeSmall: {
        fontSize: 14,
      },
      inputSizeSmall: {
        padding: '5.5px 11px !important',
      },
      input: {
        padding: '10.5px 11px !important',
      },
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
        '&:hover .MuiOutlinedInput-notchedOutline':{
          borderWidth: '1px',
          borderColor: 'rgba(0,0,0,0.26)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: 1,
          borderColor: palette.primary.main,
        },
      },
      notchedOutline: {
        borderColor: 'rgba(0, 0, 0, .08)',
      },
    },
  },

  ...customComponets,
}