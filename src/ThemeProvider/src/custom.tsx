export default {
  layout: {
    header: {
      height: 64,
    },
    content: {
      height: `calc(100vh - 64px)`,
    },
    menu: {
      closedWidth: 52,
      openWidth: 186,
    },
  },
  bgColor:{
    error:'#ff6c6c42',
    warning: '#f5c44142',
    success: '#00d99d42',
    info: '#7c9df742'
  },
  mask: {
    dark: 'rgba(0, 0, 0, .56)',
    white: 'rgba(255, 255, 255, .56)',
  },
}