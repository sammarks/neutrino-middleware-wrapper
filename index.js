const WrapperPlugin = require('wrapper-webpack-plugin')

module.exports = (neutrino, { pluginId = 'wrapper', ...options } = {}) => {
  neutrino.config
    .plugin(pluginId)
    .use(WrapperPlugin, [{
      test: neutrino.regexFromExtensions(),
      ...options
    }])
}
