import Head from 'next/head';
import Layout from 'components/layout';

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
