import { listItemButtonClasses } from '@material-ui/core'

export default {
  menu: {
    width: (theme) => theme.layout.menu.closedWidth,
    borderRadius: 0,

    '& .menu-list': {
      width: (theme) => theme.layout.menu.closedWidth,
      transition: (theme) => theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      pt: 0,
      pb: 0,
      overflowX: 'hidden',
      height: '100%',
      boxShadow: '0px 4px 8px 0px rgb(0, 0, 0, 0.16)',
      bgcolor: '#fff',
      '&:hover': {
        width: (theme) => theme.layout.menu.openWidth,
      },
    },
  },

  listItemButton: {
    width: (theme) => theme.layout.menu.openWidth,

    '& .icon': {
      color: 'rgba(0, 0, 0, 0.56)',
    },

    '& .title': {
      color: 'currentColor',

      '& span': {
        fontSize: 14,
        fontWeight: 400,
      },
    },

    [`&.${listItemButtonClasses.selected}`]: {
      background: 'linear-gradient(90deg,#71D376 0%,#4BB051 100%)',

      '& .icon': {
        color: '#fff',
      },

      '& .title span': {
        color: '#fff',
        fontWeight: 500,
      },
    },
  },
}