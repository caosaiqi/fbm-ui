import { listItemButtonClasses } from '@material-ui/core'

export default {
  menu: ({ closedWidth, openWidth }) => ({
    width: closedWidth,
    borderRadius: 0,

    '& .menu-list': {
      width: closedWidth,
      pt: 0,
      pb: 0,
      overflowX: 'hidden',
      height: '100%',
      boxShadow: '0px 4px 8px 0px rgb(0, 0, 0, 0.16)',

      '&:hover': {
        width: openWidth,
      },
    },
  }),

  listItemButton: {
    whiteSpace: 'nowrap',
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