# INST-APP-TEMPLATE

_This repository is not officially developed or supported by [Instructure](https://github.com/instructure)._

## About

INST-APP-TEMPLATE is a **highly** opinionated NPM repository designed to bootstrap development using [Instructure UI](https://instructure.design) (the frontend for [Canvas LMS](https://canvas.com)) using modern, leading-edge tooling.

## Features & Modules

* [Node](https://nodejs.org) v22.0.0
* [PNPM](https://pnpm.io/) v9.1.1 via [Corepack](https://github.com/nodejs/corepack#readme)
* [React](https://react.dev/) v18.3.1
* [NextJS](https://nextjs.org/) v14.2.3
  * [next-intl](https://next-intl-docs.vercel.app/) v3.13.0
  * [Auth.js](https://authjs.dev/) v4.24.7
  * [MDX](https://mdxjs.com/) v3.0.0 via [@next/mdx](https://www.npmjs.com/package/@next/mdx) v14.2.3
* [Instructure UI](https://instructure.design/) v9.0.1
  * MD to INST-UI (in development)
  * MDX to INST-UI (in development)
  * Dark mode (in development)

<br />

* [Typescript](https://www.typescriptlang.org/) v5.4.5
* [API Documenter](https://api-extractor.com/pages/setup/generating_docs/) v7.24.5
* [Biome](https://biomejs.dev/) v1.7.3
* [Playwright](https://playwright.dev/) v1.44.0
  * [Playwright Component Tests](https://playwright.dev/docs/test-components) v1.44.0
* [dotenvx](https://dotenvx.com/)
* [ANSIS](https://github.com/webdiscus/ansis/)

## Opinions

INST-APP-TEMPLATE is a **highly** opinionated React project template akin to `create-react-app` or `create-next-app` and provides lots of pre-wired settings.

It's a good option for starting a new project and includes lots of helpers, but because of its nature, it might not be the best for incremental updates or porting of existing projects.

### Environment

INST-APP-TEMPLATE uses the latest release versions of: Node, PNPM, React, and NextJS.

Out of the box it provides a fully typed project with Next wired for:
* New [App Router](https://nextjs.org/docs/app/building-your-application/routing)
* [Server Side Rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
* Encrypted environmental vars
* [Turbopack](https://nextjs.org/docs/architecture/turbopack) bundler
* Internationalization
* Authentication
* [Edge Runtime](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes)

### Frontend

Instructure UI v9 is used with SSR support for [Emotion](https://emotion.sh/docs/introduction).

#### UI Themes

Themes are renamed from `canvas` to `standard` and from `canvas-high-contrast` to `highContrast`

#### UI Mode

UI modes are supported as `light`, `dark`, and `system`.  This means that themes and UIs can be combined.

#### Colors

Colors are provided in a structured object in the format of `colors[ui][mode].*` where `*` is a scale of shades from `lightest` to `darkest` and also provides shade names based on UI Theme variables.  This means you do not need nests of conditional statements to handle colors.  Component props have ThemeOverrides defined based on UI Context.  So `<Text color="primary">` just works as you would expect regardless of theme or mode as does ``<span style="color:`${colors[ui][mode].brand}`">``

#### Accessibility

The standard theme in light and dark mode meets 3:1 color contrast ratios for all theme color shades.  The highContrast theme in light and dark mode meets 4.5:1 for all theme color shades.

#### Layout

A standard page layout is provided with the page body rendered using client rehydration for speed.

A single modal is provided with helper functions such as `showModal()`, `toggleModal()`, and `hideModal()`.  Using the built-in Modal means that only one Todal can be displayed on the screen at a time.  Instructure UI `<Modal>` component is still available.

A single tray is provided with helper functions such as `showTray()`, `toggleTray()`, `hideTray()`, and `clearTray()`.  Using the builtin Tray means that only one Tray can be displayed on the screen at a time.  Instructure UI `<Tray>` component is still available.

Full module props for components and component children are supported as pass-through props for `showTray()` and `showModal()`.

The built-in Modal and Tray *cannot* be displayed together- Opening one will close the other.

Contents of Modal and Tray are not cleared when dismissing with `hide*` functions, this allows the user to re-open using the `toggle*` functions without the need to re-render.  Contents are cleared as the first sub-routine of the `show*` functions.

#### Framing

iFrame detection is built-in and will adjust the display of the app-template accordingly.  This is to automatically support style guides for LTI launches within Canvas LMS or as a standalone application.

### Development

Biome JS is used for linting/formatting and a biome project file is included with version control set to git.  This replaces eslint which is built into `create-next-app`.

VS Code helper project settings are included for code snippets and other things.

JSONC is used where modules support it and overrides for support are provided in `.gitattributes` and `.vscode/settings.json`

Playwright is used for UI tests and component tests.

ANSIS is used for logging formatting.  It is a modern, lightweight, and zero dependency component.

The Canvas LMS browserslist config is used.

Out of the box all Components, layouts, and utils are fully typed.

dotenvx provides encrypted environmental vars using NextJS conventions.

## Getting Started

1. cd to the `inst-app-template` folder
2. run `pnpm install` for inital setup
3. run `pnpm dev` to start local server
4. edit allthethings