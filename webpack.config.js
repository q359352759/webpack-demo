const path = require('path');
// 设定 HtmlWebpackPlugin
// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');
// 清理 /dist 文件夹
// npm install clean-webpack-plugin --save-dev
const CleanWebpackPlugin = require('./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin');
// 启用 HMR
const webpack = require('./node_modules/webpack/lib/webpack');
module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js'
    },
    // 使用 source map
    devtool: 'inline-source-map',
    // 使用 webpack-dev-server
    // npm install --save-dev webpack-dev-server
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //注意下面这行没有传递参数
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'Output Management',
            filename:'index.html',
            template:'./src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 使用 webpack-dev-middleware
        // npm install --save-dev express webpack-dev-middleware
        publicPath: '/'
    },
    module: {
        // npm install --save-dev style-loader css-loader
        //加载css
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                    // {
                    //   loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    // },
                    // {
                    //   loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    // },
                    // {
                    //   loader: "sass-loader" // 将 Sass 编译成 CSS
                    // }
                  ]
            },
            //加载图片
            // npm install --save-dev file-loader
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 加载数据
            // npm install --save-dev csv-loader xml-loader
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};