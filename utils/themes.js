import { neutralColors, primaryColors, secondaryColors } from './colors';

export const primaryTheme = {
  pageBackgroundColor: neutralColors.get(100),
  headerBackgroundColor: primaryColors.get(500),
  headerBorderColor: secondaryColors.get(500),

  // TODO: FIGURE THESE OUT.
  primaryColor: '#000000',
  primaryBorderColor: '#000000',
  primaryHoverColor: '#000000',
  primaryHoverBorderColor: '#000000',
  primaryActiveColor: '#000000',
  primaryActiveBorderColor: '#000000',
  disabledColor: '#000000',
  textColorOnPrimary: '#000000',
};

export const alternateTheme = {
  pageBackgroundColor: primaryColors.get(900),
  headerBackgroundColor: primaryColors.get(700),
  headerBorderColor: secondaryColors.get(500),

  // TODO: FIGURE THESE OUT.
  primaryColor: '#000000',
  primaryBorderColor: '#000000',
  primaryHoverColor: '#000000',
  primaryHoverBorderColor: '#000000',
  primaryActiveColor: '#000000',
  primaryActiveBorderColor: '#000000',
  disabledColor: '#000000',
  textColorOnPrimary: '#000000',
};
