const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
    entry: ['regenerator-runtime', 'babel-polyfill', './src/js/main.js'],
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
                from: 'src/manifest.json',
                to: '.'
            },
            {
                from: 'src/css/styles.css',
                to: './css'
            },
            {
                from: 'src/img/',
                to: './img'
            }
        ]),
        new OfflinePlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
