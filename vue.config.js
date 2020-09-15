/* eslint-disable @typescript-eslint/no-var-requires */
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        HtmlWebpackPlugin: require('html-webpack-plugin'),
        logo: './custom/logo.svg'
      }),
      new DefinePlugin({
        GIT_HASH: JSON.stringify(gitRevision('hash')),
        GIT_BRANCH: JSON.stringify(gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString())
      })
    ]
  }
}
