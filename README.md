# Nx NextWhiteLabel

This project was generated using [Nx](https://nx.dev).

The goal of this project is to create a NEXT white label site where brand-specific logic and components can be "plugged in".

## Getting started

1. Clone the repo.
2. Install dependencies using `npm install`.
3. Start the application with or without a brand. Existing brands:

* wl (white label) `npm run start`
* neutral `BRAND_NAME=neutral npm run start`
* batman `BRAND_NAME=batman npm run start`

## Troubleshooting

If the specific brand does not exist, a fallback will be done to the brand **wl**.

If styling doesn't apply directly, clear the cache using `rm -rf dist`.

## Key takeaways

* A webpack alias exists for a placeholder module name towards a brand library.
* A fallback should exist for that module name, towards the white-label library
* Each library/app using the placeholder module name, must have a module declaration for that placeholder, exporting the white-label root.
* Hot reloading works as expected: changes in the loaded brand, trigger a reload.
* Implicit dependencies could be added in the app's project.json if needed.
* Each brand must export the full white-label root in its own root index file.
* Overloading an exported object within a brand must be done explicitly (e.g. `export {exampleFunction} from './lib/example-function';` instead of `export * from './lib/example-function';`).
* A brand should only export overloaded objects, because others cannot be loaded from the placeholder module name.
