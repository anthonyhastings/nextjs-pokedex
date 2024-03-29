describe('Details Page', () => {
  beforeEach(() => {
    cy.task('mswRequest', {
      method: 'GET',
      path: 'https://pokeapi.co/api/v2/pokemon/*',
      statusCode: 200,
      body: {
        height: 6,
        id: 654321,
        name: 'nic-cage',
        stats: [
          {
            base_stat: 60,
            stat: {
              name: 'hp',
            },
          },
          {
            base_stat: 61,
            stat: {
              name: 'attack',
            },
          },
          {
            base_stat: 62,
            stat: {
              name: 'defense',
            },
          },
          {
            base_stat: 63,
            stat: {
              name: 'special-attack',
            },
          },
          {
            base_stat: 64,
            stat: {
              name: 'special-defense',
            },
          },
          {
            base_stat: 65,
            stat: {
              name: 'speed',
            },
          },
        ],
        sprites: {
          front_default:
            'https://static.wikia.nocookie.net/filthy-frank/images/8/8d/516c32f08e03d.png/revision/latest?cb=20151019010624',
          other: {
            'official-artwork': {
              front_default:
                'https://images.squarespace-cdn.com/content/v1/59b4328f49fc2b50d08701fb/1565322410979-QXEJK0ULD5NK5LQCKEZD/nicolas_cage_art?format=500w',
            },
          },
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'psychic',
              url: 'https://pokeapi.co/api/v2/type/14/',
            },
          },
        ],
        weight: 85,
      },
    });

    cy.task('mswRequest', {
      method: 'GET',
      path: 'https://pokeapi.co/api/v2/pokemon-species/*',
      statusCode: 200,
      body: {
        capture_rate: 45,
        flavor_text_entries: [
          {
            flavor_text: 'The one and only\nMr Nick Cage!',
            language: {
              name: 'en',
            },
          },
        ],
        gender_rate: 1,
        genera: [{ genus: 'A-list Celebrity', language: { name: 'en' } }],
        names: [{ name: 'Nic Cage', language: { name: 'en' } }],
      },
    });

    cy.task('mswRequest', {
      method: 'GET',
      path: 'https://pokeapi.co/api/v2/type/*',
      statusCode: 200,
      body: {
        names: [{ name: 'Psychic', language: { name: 'en' } }],
      },
    });
  });

  afterEach(() => {
    cy.task('mswClear');
  });

  it('renders pokemon with number and name', () => {
    cy.visit('/pokemon/nic-cage');

    cy.findByRole('heading', { name: /#654321 - nic cage/i }).should(
      'be.visible'
    );

    cy.findByText(/psychic/i).should('be.visible');
  });
});
