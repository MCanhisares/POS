module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@logic': './src/logic',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@components': './src/components',
          '@data': './src/data',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '~': './',
        },
      },
    ],
  ],
};
