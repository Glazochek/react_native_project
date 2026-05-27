module.exports = function (api) {
    api.cache(true)
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '#design': './src/design/index.ts',
              '#shared': './src/shared/index.ts',
              '#features': './src/features',
            },
          },
        ],
      ],
    }
  }