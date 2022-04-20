const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                "style-loader", // creates style nodes from JS Nodes {
                "css-loader", // translates CSS into CommonJs
                "sass-loader", // compiles Sass into to CSS, using node sass by default
            ],
        }, ],
    },
});