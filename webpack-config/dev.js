const webpackMerge = require('webpack-merge');
const base = require('./base.js');

const path = require('path');

module.exports = webpackMerge(base, {
    //specific config
   
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        

    ],
    module: {
        rules: [

          
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },

                ]
            },
           


        ]
    },
      resolve: {
    alias: {
      config: path.resolve(__dirname, './../src/config/dev.js')
    }
  },
    devtool: 'eval-source-map' //cheap-module-eval-source-map 大型项目用这个
});