const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                from: 'src/css/styles.css',
                to: './css'
            },
            {
                from: 'src/img/',
                to: './img'
            }
        ])
    ]
};
