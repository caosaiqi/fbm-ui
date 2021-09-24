import { green, red } from '@material-ui/core/colors'

const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'light',
  primary: {
    light: green[300],
    main: green[500],
    dark: green[600],
    contrastText: '#fff',
  },
  secondary: {
    light: red[300],
    main: '#FF6C6C',
    dark: red[700],
    contrastText: '#fff',
  },
  error: {
    light: '#ff8989',
    main: '#ff6c6c',
    dark: '#b24b4b',
    contrastText: '#fff',
  },
  warning: {
    light: '#f7cf67',
    main: '#f5c441',
    dark: '#ab892d',
    contrastText: '#fff',
  },
  success: {
    light: '#33e0b0',
    main: '#00d99d',
    dark: '#00976d',
    contrastText: '#fff',
  },
  info: {
    light: '#96b0f8',
    main: '#7c9df7',
    dark: '#566dac',
    contrastText: '#fff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: 'rgba(0, 0, 0, 0.86)',
    secondary: 'rgba(0, 0, 0, 0.56)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    hint: 'rgba(0, 0, 0, 0.26)',
    link: '#576B95',
  },
  divider: '#F4F4F4',
  background: {
    paper: '#fff',
    default: '#F9FAF9',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.86)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.04)',
    disabledOpacity: 0.26,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 150,
    leavingScreen: 150,
  },
}

const typography = {
  fontFamily: [
    'PingFang SC',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h4: {
    fontSize: '34px',
    lineHeight: '48px',
  },
  h5: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  h6: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '18px',
  },
  subtitle1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
  },
}


export const layout = {
  header: {
    height: 64,
  },
  content: {
    height: `calc(100vh - 64px)`,
  },
}

export default {
  transitions,
  palette,
  typography,
}