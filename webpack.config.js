const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: '.'
            },
            {
                from: 'src/css/index.css',
                to: './css'
            }
        ]),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise',
        })
    ]
};
