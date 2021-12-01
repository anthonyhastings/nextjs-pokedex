import { Global, css, styled } from '@emotion/react';
import Head from 'next/head';
import emotionNormalize from 'emotion-normalize';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
      />
      <meta
        name="description"
        content="An example pokedex application for the Kanto region built using NextJS."
      />
      <meta name="theme-color" content="#3C5AA6" />
      <title>Pokedex</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
      <link rel="icon" href="/images/icons/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
    </Head>
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

export default App;
