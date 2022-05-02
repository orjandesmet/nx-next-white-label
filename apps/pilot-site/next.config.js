// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['test']);

const brand = (process.env.BRAND_NAME || 'wl').toLowerCase();
console.log(`Running for brand '${process.env.BRAND_NAME}' -> '${brand}'`)
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  webpack(config, context) {
    config.resolve.alias = {
      ...(config.resolve?.alias ?? {}),
      '@nx-next-white-label/brand': `@nx-next-white-label/brand-${brand}`,
    }
    config.resolve.fallback = {
      ...(config.resolve?.fallback ?? {}),
      '@nx-next-white-label/brand': `@nx-next-white-label/brand-wl`,
    }
    return config;
  }
};

module.exports = withPlugins([
  withNx,
  withTM,
], nextConfig);
// This is not good: https://github.com/nrwl/nx/issues/7203
// https://www.npmjs.com/package/next-transpile-modules

