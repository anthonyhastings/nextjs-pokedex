import { Global, css, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { fontFamilies } from 'utils/typography';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        ${emotionNormalize}

        *,
          *::after,
          *::before {
          box-sizing: border-box;
        }

        html {
          color: ${theme.textColor};
          font-family: ${fontFamilies.get('body')};
          font-size: ${(10 / 16) * 100}%;
          height: 100%;
          overflow-y: scroll;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
