import { DefaultTheme } from 'styled-components';

export const BreakPoints = {
  sm: '35em', // 560px
  md: '46em', // 736px
  lg: '55em', // 880px
};

export const FontSizes = {
  '2xs': '0.875rem', // 14px
  xs: '1.125rem', // 18px
  sm: '1.375rem', // 22px
  md: '1.5rem', // 24px
  lg: '2.125rem', // 34px
  xl: '2.875rem', // 46px
};

export const Colors = {
  black: {
    900: '#0f0f0f',
  },
  gray: {
    400: '#777777',
  },
  blue: {
    600: '#38a5ff',
  },
  red: {
    50: '#ffc0c0',
    200: '#f25135',
  },
};

const theme: DefaultTheme = {
  breakpoints: BreakPoints,
  fontSizes: FontSizes,
  colors: Colors,
};

export default theme;
