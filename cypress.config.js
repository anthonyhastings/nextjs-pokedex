const { defineConfig } = require('cypress');
const http = require('http');
const next = require('next');
const { rest } = require('msw');
const { setupServer } = require('msw/node');

const mockServer = setupServer();

const startNextServer = async () => {
  const app = next({ dev: true });
  const handleNextRequests = app.getRequestHandler();

  await app.prepare();

  const customServer = new http.Server(async (req, res) => {
    return handleNextRequests(req, res);
  });

  await new Promise((resolve, reject) => {
    customServer.listen(3000, (err) => {
      if (err) return reject(err);

      console.log('> Ready on http://localhost:3000');
      resolve();
    });
  });
};

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents: async (on) => {
      await startNextServer();
      console.log('Next.js server started.');

      on('task', {
        mswRequest({ method, path, statusCode, body }) {
          console.log('mswRequest - Mocking route.');
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
  },
});
