const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'test-monorepo',
    projectName: 'mfe2-lib',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      historyApiFallback: true,
      port: 4202,
    },
  });
};
