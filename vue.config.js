/* eslint-disable @typescript-eslint/no-var-requires */
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        GIT_HASH: JSON.stringify('1' || gitRevision('hash')),
        GIT_BRANCH: JSON.stringify('1' || gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString()),
        GA_ID: JSON.stringify(process.env.GA_ID)
      })
    ]
  }
}
