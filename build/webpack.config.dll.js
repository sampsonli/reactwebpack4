const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'prop-types', 'react-dom', 'react-router', 'react-redux', 'redux', 'axios', 'classnames', 'react-deliverer', 'moment'],
    },

    output: {
        filename: '[name].dll.js?[chunkhash:8]',
        path: path.resolve(__dirname, '../static'),
        library: '[name]_lib',
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../static/[name]-manifest.json'),
            name: '[name]_lib',
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.resolve(__dirname, '../static'),
        }),
    ],
};
