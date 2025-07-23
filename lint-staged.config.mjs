/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,mjs,ts,astro}': ['eslint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
  '*.{css,astro}': ['stylelint --fix'],
}
