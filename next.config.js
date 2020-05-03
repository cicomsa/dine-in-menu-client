const sass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const path = require('path')

module.exports = withPlugins([
  {
    async exportPathMap() {

      const responsePages = {
        handles: ['', 'menu', 'orders']
      }

      const createHandles = (type, res) => {
        return res.handles.reduce(
          (pages, page) => {
            return ({
              ...pages,
              [`${type}${page}`]: {
                page: `${type}`,
                query: { handle: page }
              }
            })
          },
          {}
        )
      }

      const staticPages = createHandles('/', responsePages)

      return staticPages
    }
  },
  sass,
  {
    webpack: (config, { defaultLoaders, dev, isServer }) => {
      config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components')
      config.resolve.alias['@consts'] = path.resolve(__dirname, 'src/consts')
      config.resolve.alias['@helpers'] = path.resolve(__dirname, 'src/helpers')
      config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages')
      config.module.rules.push({
        test: /\.scss$/,
        include: path.resolve(__dirname, '../'),
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })

      return config
    }
  },
  { exportTrailingSlash: true }
])