import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import AspectRatioImage from 'components/aspect-ratio-image';
import { PrimaryButton } from 'components/button';
import { H2, Paragraph } from 'components/typography';
import { spacing } from 'utils/typography';

const PageWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: flex-start;
`;

const PokedexWrapper = styled(AspectRatioImage)`
  margin-bottom: ${spacing.get(3)};
  width: 50%;
`;

const CopyContentWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  text-align: center;
`;

const IntroParagraph = styled(Paragraph)`
  flex-grow: 1;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Pokedex: Home</title>
      </Head>

      <PageWrapper>
        <PokedexWrapper ratio="1.22 / 1">
          <img src="/images/pokedex.png" alt="Pokedex" />
        </PokedexWrapper>

        <CopyContentWrapper>
          <H2>Kanto Region Pokedex</H2>
          <IntroParagraph>
            This is a personal project in order to learn more about Next.js. The
            main aim is to compare static rendering with server-side rendering.
            It is a working pokedex for the Kanto region. This particular page
            is statically generated at build time.
          </IntroParagraph>
          <Link href="/pokemon" passHref>
            <PrimaryButton size="large">Go to Pokedex</PrimaryButton>
          </Link>
        </CopyContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Home;
