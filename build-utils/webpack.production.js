const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = () => ({
    devtool: "nosources-source-map",
    output: {
        filename: "production.js"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
})
