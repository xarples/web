const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    sassLoaderOptions: {
      includePaths: [path.resolve(__dirname, 'node_modules')]
    }
  })
)