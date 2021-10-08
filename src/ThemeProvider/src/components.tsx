
import customComponets from './customComponets'

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