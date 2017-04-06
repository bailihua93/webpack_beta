const path = require('path'); //引用a下面的东西的时候可以直接，import src/a/some-module
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: process.cwd() + '/src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: process.cwd() + '/src/index.html',
            favicon: process.cwd() + '/src/index.html'
        }),
    ],
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    hash: 'sha512',
                    publicPath: '/',
                    name: 'assets/images/[hash].[ext]'
                }
            }


        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            src: path.resolve(__dirname, './../src')
        }
    }
};