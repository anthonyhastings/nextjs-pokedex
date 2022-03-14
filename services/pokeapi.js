import Decimal from 'decimal.js-light';

const BASE_URL = 'https://pokeapi.co/api/v2';

const convertHectogramsToKilograms = (value) => {
  return new Decimal(value).dividedBy(10).toDecimalPlaces(2).toNumber();
};

const convertDecimetersToMeters = (value) => {
  return new Decimal(value).dividedBy(10).toDecimalPlaces(2).toNumber();
};

const convertCaptureRateToPercentage = (captureRate) => {
  return new Decimal(captureRate)
    .dividedBy(255)
    .times(100)
    .toDecimalPlaces(2)
    .toNumber();
};

const createGenderPercentages = (femaleRate) => {
  if (femaleRate === -1) return null;

  const femalePercentage = new Decimal(femaleRate)
    .dividedBy(8)
    .times(100)
    .toNumber();

  return {
    male: 100 - femalePercentage,
    female: femalePercentage,
  };
};

const getEnglishRecord = (records) => {
  return records.find((record) => record.language.name === 'en');
};

const extendWithTypes = async (pokemon, typeRecords) => {
  const types = await Promise.all(
    typeRecords.map(async ({ type: typeRecord }) => {
      const typeResponse = await (await fetch(typeRecord.url)).json();

      return {
        slug: typeRecord.name,
        name: getEnglishRecord(typeResponse.names).name,
      };
    })
  );

  return {
    ...pokemon,
    types,
  };
};

export const fetchPokemon = async ({ slug, includeTypes = false }) => {
  const pokemonResponse = fetch(`${BASE_URL}/pokemon/${slug}`);
  const speciesResponse = fetch(`${BASE_URL}/pokemon-species/${slug}/`);

  const [pokemonData, speciesData] = await Promise.all([
    pokemonResponse.then((response) => response.json()),
    speciesResponse.then((response) => response.json()),
  ]);

  const description = getEnglishRecord(
    speciesData.flavor_text_entries
  ).flavor_text.replace(/\n|\f/g, ' ');

  const stats = pokemonData.stats.map((statRecord) => ({
    name: statRecord.stat.name,
    value: statRecord.base_stat,
  }));

  const pokemon = {
    artwork: pokemonData.sprites.other['official-artwork'].front_default,
    captureRatePercentage: convertCaptureRateToPercentage(
      speciesData.capture_rate
    ),
    description,
    genderPercentages: createGenderPercentages(speciesData.gender_rate),
    genus: getEnglishRecord(speciesData.genera).genus,
    height: {
      value: convertDecimetersToMeters(pokemonData.height),
      unit: 'm',
    },
    name: getEnglishRecord(speciesData.names).name,
    number: pokemonData.id,
    slug: pokemonData.name,
    sprite: pokemonData.sprites.front_default,
    stats,
    weight: {
      value: convertHectogramsToKilograms(pokemonData.weight),
      unit: 'kg',
    },
  };

  return includeTypes ? extendWithTypes(pokemon, pokemonData.types) : pokemon;
};

export const fetchKantoPokemon = async () => {
  const pokemonData = await (
    await fetch(`${BASE_URL}/pokemon?limit=151`)
  ).json();

  return await Promise.all(
    pokemonData.results.map((record) =>
      fetchPokemon({ slug: record.name, includeTypes: false })
    )
  );
};
