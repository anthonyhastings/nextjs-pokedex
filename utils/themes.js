import { neutralColors, primaryColors, textColors } from './colors';

export const primaryTheme = {
  pageBackgroundColor: neutralColors.get(100),
  headerBackgroundColor: primaryColors.get(500),
  primaryColor: primaryColors.get(500),
  primaryBorderColor: primaryColors.get(700),
  primaryHoverColor: primaryColors.get(400),
  primaryHoverBorderColor: primaryColors.get(600),
  primaryActiveColor: primaryColors.get(300),
  primaryActiveBorderColor: primaryColors.get(500),
  disabledColor: neutralColors.get(500),
  disabledBorderColor: neutralColors.get(600),
  textColorOnPrimary: textColors.get('inverted'),
};

export const alternateTheme = {
  pageBackgroundColor: primaryColors.get(900),
  headerBackgroundColor: primaryColors.get(700),
  primaryColor: primaryColors.get(500),
  primaryBorderColor: primaryColors.get(300),
  primaryHoverColor: primaryColors.get(400),
  primaryHoverBorderColor: primaryColors.get(200),
  primaryActiveColor: primaryColors.get(300),
  primaryActiveBorderColor: primaryColors.get(100),
  disabledColor: neutralColors.get(500),
  disabledBorderColor: neutralColors.get(400),
  textColorOnPrimary: textColors.get('inverted'),
};
