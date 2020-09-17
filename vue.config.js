/* eslint-disable @typescript-eslint/no-var-requires */
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  publicPath: '',
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        HtmlWebpackPlugin: require('html-webpack-plugin'),
        logo: './custom/logo.svg',
        favicons: {
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            firefox: false,
            windows: false,
            yandex: false
          }
        }
      }),
      new DefinePlugin({
        GIT_HASH: JSON.stringify(gitRevision('hash')),
        GIT_BRANCH: JSON.stringify(gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString())
      })
    ]
  }
}
