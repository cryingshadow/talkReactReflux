const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [path.resolve(ROOT_PATH, 'src/app/main.js')],

    resolve: {
        extensions: ['', '.js']
    },

    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example Webshop'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
};