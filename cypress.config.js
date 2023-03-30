const http = require('node:http');
const { defineConfig } = require('cypress');
const next = require('next');
const { loadEnvConfig } = require('@next/env');

// Load environment variables the same way Next.js does.
loadEnvConfig(__dirname);

const testType = process.env.TEST_TYPE ?? 'integration';

const startNextServer = async () => {
  const app = next({ dev: true });
  const handleNextRequests = app.getRequestHandler();

  await app.prepare();
  console.log('> Next.js server started');

  const customServer = new http.Server(async (req, res) => {
    return handleNextRequests(req, res);
  });

  await new Promise((resolve, reject) => {
    customServer.listen(3000, (err) => {
      if (err) return reject(err);

      console.log('> Listening on http://localhost:3000');
      resolve();
    });
  });
};

const integrationConfig = {
  baseUrl: 'http://localhost:3000',
  specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
  setupNodeEvents: async (on) => {
    const { rest } = require('msw');
    const { setupServer } = require('msw/node');
    const mockServer = setupServer();

    await startNextServer();

    on('task', {
      mswRequest({ method, path, statusCode, body }) {
        console.log(`mswRequest - Mocking route - [${method}] ${path}`);
        const mswMethodName = method.toLowerCase();

        mockServer.listen();

        mockServer.use(
          rest[mswMethodName](path, (req, res, ctx) => {
            return res(ctx.status(statusCode), ctx.json(body));
          })
        );

        return null;
      },
      mswClear() {
        console.log('mswClear - Restoring handlers.');
        mockServer.restoreHandlers();
        return null;
      },
    });
  },
};

const endToEndConfig = {
  baseUrl: 'https://nextjs-pokedex-lemon.vercel.app/',
  specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  trashAssetsBeforeRuns: true,
};

module.exports = defineConfig({
  e2e: testType === 'integration' ? integrationConfig : endToEndConfig,
});
