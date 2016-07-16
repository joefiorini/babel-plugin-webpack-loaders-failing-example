import { resolve, join } from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

console.log('webpack config')

export default {
  context: __dirname
, target: 'web'
, devtool: 'source-map'
, module:
    { loaders:
      [ { test: /\.scss$/
        , loader: ExtractTextPlugin.extract('style', `css?sourceMap&modules&importLoaders=1
              &localIdentName=[name]__[local]___[hash:base64:5]!sass`)

        }
      ]
    }
, plugins:
    [ new ExtractTextPlugin('styles.[hash].css')
    ]
};
