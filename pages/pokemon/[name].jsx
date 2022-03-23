import Head from 'next/head';
import styled from '@emotion/styled';
import AspectRatioImage from 'components/aspect-ratio-image';
import { TertiaryButton } from 'components/button';
import { H2, H3, Paragraph } from 'components/typography';
import { fetchPokemon } from 'services/pokeapi';
import * as breakpoints from 'utils/breakpoints';
import { textColors } from 'utils/colors';
import { spacing, typeScale } from 'utils/typography';

export const getServerSideProps = async (context) => {
  const pokemon = await fetchPokemon({
    slug: context.params.name,
    includeTypes: true,
  });

  return {
    props: {
      pokemon,
    },
  };
};

const typeColorMap = new Map([
  ['normal', '#A8A77A'],
  ['fire', '#EE8130'],
  ['water', '#6390F0'],
  ['electric', '#F7D02C'],
  ['grass', '#7AC74C'],
  ['ice', '#96D9D6'],
  ['fighting', '#C22E28'],
  ['poison', '#A33EA1'],
  ['ground', '#E2BF65'],
  ['flying', '#A98FF3'],
  ['psychic', '#F95587'],
  ['bug', '#A6B91A'],
  ['rock', '#B6A136'],
  ['ghost', '#735797'],
  ['dragon', '#6F35FC'],
  ['dark', '#705746'],
  ['steel', '#B7B7CE'],
  ['fairy', '#D685AD'],
]);

const statSlagToName = new Map([
  ['hp', 'HP'],
  ['attack', 'Attack'],
  ['defense', 'Defense'],
  ['special-attack', 'Special Attack'],
  ['special-defense', 'Special Defense'],
  ['speed', 'Speed'],
]);

const HeaderWrapper = styled('header')`
  margin-bottom: ${spacing.get(2)};
`;

const ChipWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: flex-start;
`;

const Chip = styled('div')`
  background: ${({ type }) => typeColorMap.get(type)};
  border-radius: 0.3rem;
  color: ${textColors.get('inverted')};
  flex: 0 0 auto;
  font-size: ${typeScale.get('paragraph')};
  font-weight: bold;
  padding: 0.6rem;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.1rem ${textColors.get('default')};
`;

const InsightsWrapper = styled('div')`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: ${spacing.get(1)};
  justify-content: flex-start;
  margin-bottom: ${spacing.get(4)};

  ${breakpoints.up('md')} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const PokemonImage = styled(AspectRatioImage)`
  margin: 0 auto;
  max-width: 47.5rem;
  width: 100%;

  ${breakpoints.up('md')} {
    margin: 0;
    width: 50%;
  }
`;

const StatList = styled('ul')`
  flex: 1 1 50%;
  margin: 0;
  padding: 0;
`;

const StatListItem = styled('li')`
  list-style: none;
  margin-bottom: ${spacing.get(2)};

  :last-child {
    margin-bottom: 0;
  }
`;

const StatTrack = styled('div')`
  background-color: ${({ theme }) => theme.disabledColor};
  border: 0.3rem solid ${({ theme }) => theme.primaryBorderColor};
  border-radius: 2.5rem;
  display: block;
  height: 2.5rem;
  overflow: hidden;
  width: 100%;
`;

const StatFill = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryHoverColor};
  display: flex;
  flex-direction: row;
  font-size: ${typeScale.get('paragraph')};
  font-weight: 700;
  height: 100%;
  justify-content: flex-start;
  padding: 0 1.3rem;
`;

const ProfileWrapper = styled('div')``;

const DescriptionList = styled('dl')`
  align-items: flex-start;
  display: flex;
  flex-flow: column wrap;
  font-size: ${typeScale.get('paragraph')};
  gap: 0.8rem;
  justify-content: flex-start;
  margin: 0 0 ${spacing.get(2)} 0;

  ${breakpoints.up('md')} {
    flex-direction: row;
  }
`;

const DescriptionSet = styled('div')`
  flex: 1 1 45%;
`;

const DescriptionTerm = styled('dt')`
  display: inline-block;
  font-weight: 700;
  margin: 0;
  width: 12rem;
`;

const DescriptionDetails = styled('dd')`
  display: inline-block;
`;

const StatBar = ({ children, percentage }) => {
  return (
    <StatListItem>
      <Paragraph mb={1}>{statSlagToName.get(children)}</Paragraph>
      <StatTrack>
        <StatFill style={{ width: `${percentage}%` }}>{percentage}</StatFill>
      </StatTrack>
    </StatListItem>
  );
};

const PokemonPage = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Pokedex: {pokemon.name}</title>
      </Head>

      <HeaderWrapper>
        <H2 mb={1}>
          #{pokemon.number} - {pokemon.name}
        </H2>

        <ChipWrapper>
          {pokemon.types.map((type) => (
            <Chip key={type.slug} type={type.slug}>
              {type.name}
            </Chip>
          ))}
        </ChipWrapper>
      </HeaderWrapper>

      <InsightsWrapper>
        <PokemonImage ratio="1 / 1">
          <img
            alt={`Image of ${pokemon.name}`}
            draggable={false}
            loading="lazy"
            src={pokemon.artwork}
          />
        </PokemonImage>

        <StatList>
          {pokemon.stats.map((stat) => (
            <StatBar key={stat.name} percentage={stat.value}>
              {stat.name}
            </StatBar>
          ))}
        </StatList>
      </InsightsWrapper>

      <ProfileWrapper>
        <H3 mb={1}>{pokemon.genus}</H3>
        <Paragraph>{pokemon.description}</Paragraph>

        <DescriptionList>
          <DescriptionSet>
            <DescriptionTerm>Capture Rate</DescriptionTerm>
            <DescriptionDetails>
              {pokemon.captureRatePercentage}%
            </DescriptionDetails>
          </DescriptionSet>

          <DescriptionSet>
            <DescriptionTerm>Gender Split</DescriptionTerm>
            <DescriptionDetails>
              {pokemon.genderPercentages
                ? `${pokemon.genderPercentages.male}% Male / ${pokemon.genderPercentages.female}% Female`
                : 'N/A'}
            </DescriptionDetails>
          </DescriptionSet>

          <DescriptionSet>
            <DescriptionTerm>Height</DescriptionTerm>
            <DescriptionDetails>
              {pokemon.height.value}
              {pokemon.height.unit}
            </DescriptionDetails>
          </DescriptionSet>

          <DescriptionSet>
            <DescriptionTerm>Weight</DescriptionTerm>
            <DescriptionDetails>
              {pokemon.weight.value}
              {pokemon.weight.unit}
            </DescriptionDetails>
          </DescriptionSet>
        </DescriptionList>

        <TertiaryButton
          href={`https://www.pokemon.com/us/pokedex/${pokemon.number}`}
          target="_blank"
        >
          Go to Pokemon.com entry
        </TertiaryButton>
      </ProfileWrapper>
    </>
  );
};

export default PokemonPage;
