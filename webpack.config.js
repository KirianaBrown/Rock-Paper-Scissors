const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./dist",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new Dotenv({
            systemvars: true,
        }),
    ],

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS Nodes {
                    "css-loader", // translates CSS into CommonJs
                    "sass-loader", // compiles Sass into to CSS, using node sass by default
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: "url-loader",
            },
        ],
    },
};