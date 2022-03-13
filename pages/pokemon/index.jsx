import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import AspectRatioImage from 'components/aspect-ratio-image';
import { PrimaryButtonLink } from 'components/button';
import { H2, H3 } from 'components/typography';
import { fetchKantoPokemon } from 'services/pokedex';
import { spacing, typeScale } from 'utils/typography';

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  gap: 2rem;
`;

const GridItem = styled('div')`
  align-items: stretch;
  border: 0.5rem solid ${({ theme }) => theme.primaryBorderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  transition: border-color 200ms;
`;

const GridItemTitle = styled(H3)`
  font-size: ${typeScale.get('header5')};
  text-align: center;
`;

const GridItemImage = styled(AspectRatioImage)`
  margin: 0 auto ${spacing.get(2)} auto;
  max-width: 9.6rem;
  width: 100%;
`;

export const getStaticProps = async () => {
  const kantoPokemon = await fetchKantoPokemon();

  return {
    props: {
      kantoPokemon,
    },
  };
};

const PokedexListingsPage = ({ kantoPokemon }) => {
  return (
    <>
      <Head>
        <title>Pokedex: Kanto Region</title>
      </Head>

      <H2>Listings: Kanto Region</H2>

      <GridContainer>
        {kantoPokemon.map((pokemon) => (
          <GridItem key={pokemon.slug}>
            <GridItemTitle>{pokemon.name}</GridItemTitle>
            <GridItemImage ratio="1 / 1">
              <img
                alt={`Image of ${pokemon.name}`}
                draggable={false}
                loading="lazy"
                src={pokemon.sprite}
              />
            </GridItemImage>
            <Link href={`/pokemon/${pokemon.slug}`} passHref>
              <PrimaryButtonLink size="medium">View Entry</PrimaryButtonLink>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
};

export default PokedexListingsPage;
