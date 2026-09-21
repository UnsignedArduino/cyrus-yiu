# cyrus-yiu

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflarepages)](https://cyrus-yiu.pages.dev/)
[![Lint](https://github.com/UnsignedArduino/cyrus-yiu/actions/workflows/eslint.yml/badge.svg)](https://github.com/UnsignedArduino/cyrus-yiu/actions/workflows/eslint.yml)
[![Format](https://github.com/UnsignedArduino/cyrus-yiu/actions/workflows/prettier.yml/badge.svg)](https://github.com/UnsignedArduino/cyrus-yiu/actions/workflows/prettier.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/unsignedarduino/cyrus-yiu/badge)](https://www.codefactor.io/repository/github/unsignedarduino/cyrus-yiu)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/UnsignedArduino/cyrus-yiu)

This is the source code for my portfolio website!

## Install

1. Have `nodejs`.
2. Clone this repo.
3. `yarn` to install dependencies.

## Development

Use `yarn run dev` to start a development server.

Before commit, make sure to format, (`yarn run format` / `yarn run writeFormat`) lint, (`yarn run lint` /
`yarn run writeLint`) and type-check. (`yarn run typecheck`)

## Build and serve

`yarn run build` and `yarn run start`. (because it is a static site, you can use any static server to serve the files in
the `out` directory)

This website is currently deployed to Cloudflare Pages at https://cyrusyiu.com

## Notes

- URL redirects (`/github`, `/linkedin`, etc.) are in
  [`public/_redirects`](public/_redirects) (deployed on Cloudflare Pages),
  also add them to [`next.config.ts`](next.config.ts) while at it.
- Personal/social URLs (GitHub profile, GitHub repo, GitHub issues, LinkedIn,
  resume) are centralized in [`src/lib/links.ts`](src/lib/links.ts). Update
  them there; `public/_redirects` still needs to be kept in sync manually
  since it's read directly by Cloudflare Pages and can't import from TS.
