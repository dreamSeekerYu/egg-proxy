/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598337030458_8461'

  // add your middleware config here
  config.middleware = []

  // config.view = {
  //   mapping: {
  //     '.js': 'assets',
  //   },
  // }
  // add your user config here

  const userConfig = {
    // myAppName: 'egg',
  }
  config.httpProxy = {
    '/public/api': {
      target: 'http://81.70.36.99:8001',
      pathRewrite: { '^/public/api': '' },
    },
  }
  config.security = {
    csrf: {
      enable: false,
    },
  }

  return {
    ...config,
    ...userConfig,
  }
}
