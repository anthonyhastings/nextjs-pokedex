import { Global, css, styled } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}

          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }

          html {
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
      <Component {...pageProps} />
    </>
  );
};

export default App;
