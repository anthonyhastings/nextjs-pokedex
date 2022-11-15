# Next.js Pokedex

## Introduction

<img src="https://user-images.githubusercontent.com/167421/160014678-85e98cf3-9447-46f5-904b-3f90a355a4da.gif" width="700" alt="Pokedex Demo" />

This repository is a simple Pokedex application built using Next.js primarily to showcase the framework and how it handles different forms of pre-rendering.

## Information

### What is Next.js?

Next.js is a framework which can be used to build React applications. Some highlights of what it offers are as follows:

- Acts as a bundler, optimizing code for production environments via tree shaking and code splitting.
- Includes a page-based routing system driven on the file structure within the `pages/` directory.
- Developer tooling including an environment using Fast Refresh support, along with other tooling for linting and profiling bundles.
- Offers various methods of pre-rendering; these have the benefit of assisting in Search Engine Optimization. These methods can also benefit from using environment variables and using server-side code for tasks like connecting to data stores.

### Pre-rendering

There are two methods of pre-rendering within Next.js; **Static Generation** and **Server-Side Rendering**. Both methods differ around _when_ rendering occurs which makes them more applicable to certain scenarios:

**Static Generation (SG)** - HTML is generated at **build time**. The pre-rendered HTML is then reused on each request. Some static pages may require external data in order to properly pre-render. For example, this data could come from an API or directly from a database. To fetch this data, Next.js allows you to export an async function called `getStaticProps` from the same file. It's worth noting that when running in development mode, this method runs upon every request.

**Server-Side Rendering (SSR)** - HTML is generated **upon each request**. These pages may need to render frequently updated data, or, data specific to a particular user. These scenarios would make it useless / impossible to use static rendering. To use Server-side Rendering, you need to export an async function called `getServerSideProps`.

Both of these async methods will only be called on the server-side and never run client-side. They won't even be included in the JS bundle for the browser, so you can safely use environment variables and secrets without fear of them getting exposed.

#### When to use one over the other?

If you can pre-render the page ahead of a users request, then you should choose Static Generation.

If your page has frequently changing data, data specific to a user, or content that would change on every request, then choose Server-Side Rendering. This method of rendering will be slower, but the pre-rendered page will always be up-to-date. An alternative would be to skip pre-rendering and use client-side logic to fetch data and populate the page.

## Pokedex Application

This application uses Next.js for static and server-side rendering, routing and so on. Styling is handled by Emotion and has a small design system in place for type scales, spacing, breakpoints, colours and theming. The pages of the application have been created with the idea of demonstrating the various pre-rendering methods:

- **Landing Page**
  - Explains the project and links to the pokedex listings page.
  - (SG) Statically rendered at **build time** without any additional data.
  - This method has been chosen because the page content will never change; it can be built once and re-served.
- **Listings Page**
  - Displays a grid of Kanto region pokemon each linking to that pokemons details page.
  - (SG) Statically rendered at **build time** with external data from PokeAPI (via `getStaticProps`).
  - This method has been chosen because despite needing external data, page content is generic and will rarely change. There are also **a lot** of API requests needed to fully render it, and these can be done once at build time to stop potential rate limiting if the page were rendered at request time.
- **Details Page**
  - Describes and profiles the pokemon including stats, types and sprites.
  - (SSR) Server-side rendered at **request time** with external data (via `getServerSideProps`) based on a slug in the URL.
  - This method has been chosen because it requires data from the path / url in order to fetch external data unique to that pokemon. We _could_ statically render this data, as it doesn't change often, but it would be over 150 pages being output with each page needing 3 API requests to populate it.

Output from build command showing different rendering techniques utilised:

```bash
$ next build
info  - Checking validity of types
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (0/4)
Pokemon Listings Page - getStaticProps
info  - Generating static pages (4/4)
info  - Finalizing page optimization

Page                                       Size     First Load JS
┌ ○ /                                      1.69 kB        96.3 kB
├   /_app                                  0 B            89.1 kB
├ ƒ /_middleware                           25.5 kB         115 kB
├ ○ /404                                   454 B          89.5 kB
├ ○ /500                                   453 B          89.5 kB
├ ● /pokemon (3809 ms)                     1.55 kB        90.6 kB
└ λ /pokemon/[name]                        2.61 kB        97.2 kB
+ First Load JS shared by all              89.1 kB
  ├ chunks/framework-91d7f78b5b4003c8.js   42 kB
  ├ chunks/main-d98b4a7f39fdfc80.js        28.2 kB
  ├ chunks/pages/_app-03e5faea193a97df.js  18.1 kB
  └ chunks/webpack-2b99834efceef160.js     773 B

ƒ  (Middleware)  intercepts requests (uses _middleware)
λ  (Server)      server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)      automatically rendered as static HTML (uses no initial props)
●  (SSG)         automatically generated as static HTML + JSON (uses getStaticProps)
```

## Further Information

- [What is Next.js?](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
- [Two Forms of Pre-rendering](https://nextjs.org/learn/basics/data-fetching/two-forms)
- [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- [Server Side Rendering (SSR) vs Static Generation (SSG)](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation)
- [Mock Network When Using Next.js `getServerSideProps` Call](https://glebbahmutov.com/blog/mock-network-from-server/)
- [PokeAPI](https://pokeapi.co/)
