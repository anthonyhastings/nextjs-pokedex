import { neutralColors, primaryColors, textColors } from './colors';

export const primaryTheme = {
  pageBackgroundColor: neutralColors.get(600),
  headerBackgroundColor: primaryColors.get(900),
  primaryColor: primaryColors.get(900),
  primaryBorderColor: primaryColors.get(900),
  primaryHoverColor: primaryColors.get(900),
  primaryHoverBorderColor: primaryColors.get(900),
  primaryActiveColor: primaryColors.get(900),
  primaryActiveBorderColor: primaryColors.get(900),
  disabledColor: neutralColors.get(600),
  disabledBorderColor: neutralColors.get(600),
  textColor: textColors.get('default'),
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
  textColor: textColors.get('inverted'),
  textColorOnPrimary: textColors.get('inverted'),
};
