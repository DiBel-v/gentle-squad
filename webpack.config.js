const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const { merge } = require("webpack-merge");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`);

module.exports = ({ mode } = { mode: "production" }) => {
    const getPlugins = () => {
        const plugins = [
            new HTMLWebpackPlugin({
                title: 'Gentle Squad',
                template: 'public/index.html',
                favicon: 'public/favicon.ico'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public/3d'),
                        to: path.resolve(__dirname, 'dist/3d')
                    }
                ]
            })
        ];
        return plugins;
    };

    const getStylesLoaders = () => {
        return ['style-loader', 'css-loader'];
    };

    return merge({
        mode,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(gltf)$/,
                    use: [
                      {
                        loader: "gltf-webpack-loader"
                      }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|glb|bin|ico)$/i,
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                },
                {
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.svg$/,
                    use: ["babel-loader",
                        {
                            loader: "react-svg-loader",
                            options: {
                                jsx: true // true outputs JSX tags
                            }
                        }
                    ]
                },
                {
                    test: /\.css/,
                    use: getStylesLoaders()
                },
                {
                    test: /\.s[ac]ss/,
                    use: [...getStylesLoaders(),
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData: '@import "./src/media/sass/helpers/helpers.scss"'
                            }
                        }
                    ]
                },
            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: true,
            historyApiFallback: true,
            hot: true,
            port: 8080
        }
    },
    modeConfiguration(mode)
    )
}