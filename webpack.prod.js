const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDevelopment = false;

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].[chunkhash].css",
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{ from: "src/img", to: "img" }],
        // }),
        new CleanWebpackPlugin({
            root: process.cwd(),
            verbose: true,
            dry: false,
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                "!img",
                "!img/*",
                "!img/favicon",
                "!img/favicon/*",
                "!important.js",
            ],
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
    },
});