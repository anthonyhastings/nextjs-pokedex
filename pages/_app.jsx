import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import Head from 'next/head';
import Layout from 'components/layout';
import { fontFamilies } from 'utils/typography';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
      />
      <meta
        name="description"
        content="A pokedex application for the Kanto region built using NextJS / React / Emotion."
      />
      <meta name="theme-color" content="#3C5AA6" />
      <title>Pokedex</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="icon" href="/images/manifest-icons/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/images/manifest-icons/icon.svg"
        type="image/svg+xml"
      />
      <link
        rel="apple-touch-icon"
        href="/images/manifest-icons/apple-touch-icon.png"
      />
      <link
        rel="stylesheet"
        href="http://fonts.cdnfonts.com/css/pokemon-solid"
      />
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
