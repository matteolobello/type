# TYPE ⌨️

> TRPC + Yarn Monorepo + Prisma + Expo

This template project is a [Yarn](https://yarnpkg.com) monorepo with full end-to-end type safety.

Powered by:

- [TRPC](https://trpc.io) (on [Fastify](https://fastify.io))
- [Zod](https://zod.dev) for input validation
- [Prisma](https://prisma.io) as ORM
- [Prisma Zod Generator](https://github.com/omar-dulaimi/prisma-zod-generator) to automatically generate Zod schemas with Prisma
- [Expo](https://expo.dev) based React Native app (with Android, iOS and Web support)
- [TWRNC](https://github.com/jaredh159/tailwind-react-native-classnames) for easy styling
- [Prettier](https://prettier.io) configuration
- [ESLint](https://eslint.org) configuration
- [Alias HQ](https://github.com/davestewart/alias-hq) to manage import aliases

## Run the project locally

```sh
$ git clone https://github.com/matteolobello/expo-trpc-monorepo.git
$ cd expo-trpc-monorepo
$ yarn
$ yarn api:start
$ yarn app:start
```

## Add new package

- Create a new directory in the `packages` folder
- Edit the `paths` attribute in `tsconfig.base.json`
- Edit the `importOrder` attribute in `.prettierrc`
